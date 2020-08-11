import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, Button, SectionList} from 'react-native';
import Modal from 'react-native-modal';
import { HeaderBackButton } from '@react-navigation/stack';
import Event from '../components/Event';
import AddEventForm from '../components/AddEventForm';

const activitiesUrl = 'http://localhost:3000/activities'
const transportationsUrl = 'http://localhost:3000/transportations'

const DayScreen = ({route, navigation}) => {
    const {day} = route.params
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activities, setActivities] = useState(day.activities)
    const [transportations, setTransportations] = useState(day.transportations)
    
    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const activitiesSorted = () => {
        return activities.sort((a, b) => a.start_time - b.start_time)
    }
    const transportationsSorted = () => {
        return transportations.sort((a, b) => a.end_time - b.start_time)
    }
    
    const allEvents = [{
        title: 'Transportation', 
        data: transportationsSorted()
    }, {
        title: 'Activities',
        data: activitiesSorted()
    }]

    const addActivity = (event) => {
        fetch(activitiesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({activity: event})
        })
            .then(response => response.json())
            .then(result => setActivities([...activities, result]))
    }

    const addTransportation = (event) => {
        fetch(transportationsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({transportation: event})
        })
            .then(response => response.json())
            .then(result => {
                setTransportations([...transportations, result])
                navigation.setOptions({
                    headerLeft: () => {
                        return <Button title="Itinerary" onPress={() => (
                            navigation.navigate('Itinerary', {transportation: result}))}
                        />
                    }
                })
            })
    }
    
    return (
        <>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Add Event</Text>
            </TouchableOpacity>
            <Modal
                isVisible={isModalVisible}
                backdropColor='white'
                backdropOpacity={0.9}
            >
                <AddEventForm 
                    addActivity={addActivity} 
                    addTransportation={addTransportation} 
                    toggleModal={toggleModal}
                    day={day}
                />
            </Modal>
            <SectionList
                sections={allEvents}
                keyExtractor={(event) => event.id.toString()}
                renderItem={({item}) => <Event event={item}/>}
                renderSectionHeader={({section: { title }}) => <Text>{title}</Text>}
            />
        </>
    );
}

export default DayScreen;
