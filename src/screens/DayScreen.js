import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, SectionList} from 'react-native';
import Modal from 'react-native-modal'
import Event from '../components/Event';
import AddEventForm from '../components/AddEventForm';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DayScreen = ({route}) => {
    const {day} = route.params
    const {addEvent} = route.params
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const activitiesSorted = day.activities.sort((a, b) => a.start_time - b.start_time)
    const transportationsSorted = day.transportations.sort((a, b) => a.end_time - b.start_time)
    const allEvents = [{
        title: 'Transportation', 
        data: transportationsSorted
    }, {
        title: 'Activities',
        data: activitiesSorted
    }]
    
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
                    addEvent={addEvent} 
                    toggleModal={toggleModal}
                />
            </Modal>
            <SectionList
                sections={allEvents}
                keyExtractor={(event) => event.id.toString()}
                renderItem={({item}) => <Event event={item}/>}
                renderSectionHeader={({section: { title }}) => <Text>{title}</Text>}
                ListEmptyComponent={<AddEvent />}
            />
        </>
    );
}

export default DayScreen;
