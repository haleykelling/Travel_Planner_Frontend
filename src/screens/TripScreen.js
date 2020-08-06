import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Trip from '../components/Trip';
import AddTripForm from '../components/AddTripForm';
import { Ionicons } from '@expo/vector-icons';

const tripsUrl = 'http://localhost:3000/trips'

const TripScreen = ({navigation}) => {

    const [trips, setTrips] = useState([])
    const [alerts, setAlerts] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        fetch(tripsUrl)
            .then(response => response.json())
            .then(result => setTrips(result))
    }, [])

    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const addTrip = (trip) => {
        fetch(tripsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({trip: trip})
        })
        .then(response => {
            if (!response.ok){
                return response.json().then(parsedResponse => {
                    setAlerts(parsedResponse.error)
                })
            } else {
                setAlerts('')
                return response.json()
                .then(result => {
                    toggleModal()
                    setTrips([...trips, result])
                })
            }
        })  
    }

    const editTrip = (id, dataToEdit) => {
        fetch(`${tripsUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({trip: dataToEdit})
        })
            .then(response => response.json())
            .then(console.log)
    }
    
    const deleteTrip = (id) => {
        const new_trips = trips.filter(trip => trip.id !== id)
        setTrips(new_trips)
        
        fetch(`${tripsUrl}/${id}`, {method: 'DELETE'})
    }

    return (
        <>
            <Text style={styles.headingStyle}>Upcoming Trips</Text>
            <FlatList 
                style={styles.listStyle}
                data={trips}
                renderItem={({item}) => {
                    return <Trip 
                        trip={item} 
                        navigation={navigation}
                        editTrip={editTrip}
                        deleteTrip={deleteTrip}
                    />
                }}
                keyExtractor={(trip) => trip.id.toString()}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleModal}>
                <Text style={styles.textStyle}>Add a New Trip</Text>
                <Ionicons style={styles.iconStyle} name="ios-add"  />
            </TouchableOpacity>
            <Modal 
                isVisible={isModalVisible}
                backdropColor='white'
                backdropOpacity={0.9}
            >
                <AddTripForm 
                    addTrip={addTrip} 
                    toggleModal={toggleModal} 
                    alerts={alerts}
                    setAlerts={setAlerts}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10
    },
    textStyle: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 30,
        color: 'white'
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(278, 48%, 18%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        marginTop: 27,
        marginRight: 30
    },
    modalStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
})

export default TripScreen;