import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, Button, SectionList} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import Event from '../components/Event';
import AddEventForm from '../components/AddEventForm';
import { updateLocale } from 'moment';

const activitiesUrl = 'https://stormy-fjord-63158.herokuapp.com/activities'
const transportationsUrl = 'https://stormy-fjord-63158.herokuapp.com/transportations'
const dayTransportationsUrl = 'https://stormy-fjord-63158.herokuapp.com/day_transportations'

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
                renderSectionHeader={({section: { title }}) => <Text style={styles.headingStyle}>{title}</Text>}
            />
            : null
            }
            <TouchableOpacity onPress={toggleModal} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Add Event</Text>
                <Ionicons style={styles.iconStyle} name="ios-add"  />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        color: 'hsl(215, 30%, 40%)',
        fontSize: 24,
        fontFamily: 'Raleway_700Bold',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 15,
        marginBottom: 50,
        marginHorizontal: 30,
        height: 85,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        marginTop: 27,
        marginRight: 30
    },
    textStyle: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 30,
        color: 'white',
        fontFamily: 'Raleway_700Bold'
    },
})

export default DayScreen;
