import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, Button, SectionList} from 'react-native';
import Modal from 'react-native-modal';
import { HeaderBackButton } from '@react-navigation/stack';
import Event from '../components/Event';
import AddEventForm from '../components/AddEventForm';
import { updateLocale } from 'moment';

const activitiesUrl = 'http://localhost:3000/activities'
const transportationsUrl = 'http://localhost:3000/transportations'
const dayTransportationsUrl = 'http://localhost:3000/day_transportations'

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

    const updateBackButton = (activity, deleteActivity) => {
        if (deleteActivity){
            navigation.setOptions({
                headerLeft: () => {
                    return <Button title="Itinerary" onPress={() => (
                        navigation.navigate('Itinerary', {
                            activityToDelete: activity,
                        }))}
                    />
                }
            })
        } else {
            navigation.setOptions({
                headerLeft: () => {
                    return <Button title="Itinerary" onPress={() => (
                        navigation.navigate('Itinerary', {
                            activity: activity,
                            dayId: day.id
                        }))}
                    />
                }
            })
        }
    }

    const addActivity = (event) => {
        fetch(activitiesUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({activity: event})
        })
            .then(response => response.json())
            .then(result => {
                setActivities([...activities, result])
                updateBackButton(result, false)
            })
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
                updateBackButton(result, false)
                return result
            })
            .then(result => {
                fetch(dayTransportationsUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({day_id: day.id, transportation_id: result.id})
                })
                .catch(error => console.log(error))
            })
    }

    const deleteEvent = (event) => {
        if (event.type_of_activity === "Transportation"){
            const newTransportations = transportations.filter(transportation => {
                return transportation.id !== event.id
            })
            setTransportations(newTransportations)
            deleteFetch(`${transportationsUrl}/${event.id}`)
            updateBackButton(event, true)
        } else {
            console.log('activity delete')
            const newActivities = activities.filter(activity => {
                return activity.id !== event.id
            })
            setActivities(newActivities)
            deleteFetch(`${activitiesUrl}/${event.id}`)
            updateBackButton(event, true)
        }
    }

    const deleteFetch = (url) => {
        fetch(url, {
            method: 'DELETE'
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
            
            {activities.length !== 0 || transportations.length !== 0 
            ? <SectionList
                sections={allEvents}
                keyExtractor={(event) => event.id.toString()}
                renderItem={({item}) => <Event event={item} deleteEvent={deleteEvent}/>}
                renderSectionHeader={({section: { title }}) => <Text>{title}</Text>}
            />
            : null
            }
        </>
    );
}

export default DayScreen;
