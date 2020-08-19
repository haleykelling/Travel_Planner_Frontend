import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, FlatList, SectionList} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import Event from '../components/Event';
import Accommodation from '../components/Accommodation';
import AddEventForm from '../components/AddEventForm';
import AddAccommodation from '../components/AddAccommodation';

const activitiesUrl = 'https://stormy-fjord-63158.herokuapp.com/activities'
const transportationsUrl = 'https://stormy-fjord-63158.herokuapp.com/transportations'
const dayTransportationsUrl = 'https://stormy-fjord-63158.herokuapp.com/day_transportations'
const accommodationsUrl = 'https://stormy-fjord-63158.herokuapp.com/accomodations'

const DayScreen = ({route, navigation}) => {
    const {day, trip} = route.params
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [accommodationsModal, setAccommodationsModal] = useState(false)
    const [showActivities, setShowActivities] = useState(true)
    const [showTransportations, setShowTransportations] = useState(false)
    const [showAccommodations, setShowAccommodations] = useState(false)
    const [activities, setActivities] = useState(day.activities)
    const [transportations, setTransportations] = useState(day.transportations)
    const [accommodations, setAccommodations] = useState(day.accomodations)
    
    const toggleModal = () => setIsModalVisible(!isModalVisible)
    const toggleAccommodationsModal = () => setAccommodationsModal(!accommodationsModal)

    const activitiesSorted = () => {
        return activities.sort((a, b) => a.start_time - b.start_time)
    }
    const transportationsSorted = () => {
        return transportations.sort((a, b) => a.end_time - b.start_time)
    }

    const handleActivities = () => {
        setShowActivities(true)
        setShowTransportations(false)
        setShowAccommodations(false)
    }
    const handleTransportations = () => {
        setShowActivities(false)
        setShowTransportations(true)
        setShowAccommodations(false)
    }
    const handleAccommodations = () => {
        setShowActivities(false)
        setShowTransportations(false)
        setShowAccommodations(true)
    }

    const updateBackButton = (activity, deleteActivity) => {
        if (deleteActivity){
            navigation.setOptions({
                headerLeft: () => {
                    return <Button title="Itinerary" onPress={() => (
                        navigation.navigate('Itinerary', {
                            activityToDelete: activity,
                            dayId: day.id
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

    const addAccommodation = (accommodation) => {
        fetch(accommodationsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accommodation)
        })
        .then(response => response.json())
        .then(result => setAccommodations([...accommodations, result]))
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
            <Modal
                isVisible={accommodationsModal}
                backdropColor='white'
                backdropOpacity={0.9}
            >
                <AddAccommodation 
                    toggleModal={toggleAccommodationsModal}
                    days={trip.days}
                    addAccommodation={addAccommodation}
                />
            </Modal>
            <View style={styles.selectorStyles}>
                <TouchableOpacity onPress={handleActivities}>
                    <Text style={showActivities ? styles.selectedText : styles.selectorText}>Activities</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTransportations}>
                    <Text style={showTransportations ? styles.selectedText : styles.selectorText}>Transportation</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAccommodations}>
                    <Text style={showAccommodations ? styles.selectedText : styles.selectorText}>Accommodations</Text>
                </TouchableOpacity>
            </View>
            {showActivities &&
                <FlatList
                    data={activitiesSorted()}
                    keyExtractor={(event) => event.id.toString()}
                    renderItem={({item}) => <Event event={item} deleteEvent={deleteEvent}/>}
                    ListEmptyComponent={() => {
                        return (
                            <>
                            <Text style={styles.emptyStyle}>No Activities Scheduled</Text>
                            <Text style={styles.emptyStyle}>Click below to add an activity!</Text>
                            </>
                        )
                    }}
                />
            }
            {showTransportations &&
                <FlatList
                    data={transportationsSorted()}
                    keyExtractor={(event) => event.id.toString()}
                    renderItem={({item}) => <Event event={item} deleteEvent={deleteEvent}/>}
                    ListEmptyComponent={() => {
                        return (
                            <>
                            <Text style={styles.emptyStyle}>No Transportation Scheduled</Text>
                            <Text style={styles.emptyStyle}>Click below to add transportation!</Text>
                            </>
                        )
                    }}
                />
            }
            {showAccommodations &&
                <FlatList
                    data={accommodations}
                    keyExtractor={(event) => event.id.toString()}
                    renderItem={({item}) => <Accommodation event={item} deleteEvent={deleteEvent}/>}
                    ListEmptyComponent={() => {
                        return (
                            <>
                            <Text style={styles.emptyStyle}>No Accommodations Scheduled</Text>
                            <Text style={styles.emptyStyle}>Click below to add an accommodation!</Text>
                            </>
                        )
                    }}
                />
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={showAccommodations ? toggleAccommodationsModal : toggleModal} style={styles.buttonStyle}>
                    {showAccommodations && <Text style={styles.textStyle}>Accommodation</Text>}
                    {showActivities && <Text style={styles.textStyle}>Activity</Text>}
                    {showTransportations && <Text style={styles.textStyle}>Transportation</Text>}
                    <Ionicons style={styles.iconStyle} name="ios-add"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Comment', {day: day})} style={styles.commentButtonStyle}>
                    <Text style={styles.textStyle}>Comments</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 5,
        marginBottom: 40,
        marginHorizontal: 5,
        height: 70,
        width: 230,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    commentButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 5,
        marginBottom: 40,
        marginHorizontal: 5,
        height: 70,
        width: 155,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        marginTop: 19,
        marginRight: 15,
    },
    textStyle: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 20,
        color: 'white',
        fontFamily: 'Raleway_700Bold'
    },
    selectorStyles: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'hsl(215, 30%, 40%)',
        paddingVertical: 15,
        marginBottom: 15,
        alignItems: 'center'
    },
    selectorText: {
        color: 'hsl(0, 0%, 80%)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16
    },
    selectedText: {
        color: 'white',
        fontFamily: 'Raleway_700Bold',
        fontSize: 23,
    },
    emptyStyle: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 20,
        color: 'hsl(0, 0%, 50%)',
        textAlign: 'center',
        marginTop: 50
    }
})

export default DayScreen;
