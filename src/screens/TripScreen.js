import React, {useState, useEffect} from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Trip'
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

import Trip from '../components/Trip';
import AddTripForm from '../components/AddTripForm';

const tripsUrl = 'https://stormy-fjord-63158.herokuapp.com/trips'

const TripScreen = ({navigation, tokenValue}) => {

    const [trips, setTrips] = useState([])
    const [alerts, setAlerts] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        fetch(tripsUrl, {
            headers: {
                'Authorization': `Bearer ${tokenValue}`
            }
        })
            .then(response => response.json())
            .then(setTrips)
    }, [])

    const organizeTrips = () => {
        return trips.sort((a, b) => {
            return new Date(b.end_date) - new Date(a.start_date)
        })
    }

    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const addTrip = (trip) => {
        fetch(tripsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenValue}`
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
        const old_trips = trips.filter(trip => trip.id !== id) 
        
        fetch(`${tripsUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenValue}`
            },
            body: JSON.stringify({trip: dataToEdit})
        })
            .then(response => response.json())
            .then(result => setTrips([...old_trips, result]))
    }
    
    const deleteTrip = (id) => {
        const new_trips = trips.filter(trip => trip.id !== id)
        setTrips(new_trips)
        
        fetch(`${tripsUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenValue}`
            }
        })
    }

    return (
        <>
            {trips ?
            <FlatList 
                data={organizeTrips()}
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
            : null
            }
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

export default TripScreen;
