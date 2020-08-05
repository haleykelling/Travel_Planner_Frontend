import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Trip from '../components/Trip';
import AddTripForm from '../components/AddTripForm';
import { Ionicons } from '@expo/vector-icons';

const tripsUrl = 'http://localhost:3000/trips'

const TripScreen = ({navigation}) => {
    
    const [trips, setTrips] = useState([])
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
            .then(response => response.json())
            .then(result => {
                setTrips([...trips, result])
                console.log(result)
            })
    }

    return (
        <ScrollView>
            <Text style={styles.headingStyle}>Upcoming Trips</Text>
            <FlatList 
                style={styles.listStyle}
                data={trips}
                renderItem={({item}) => <Trip trip={item} navigation={navigation}/>}
                keyExtractor={(trip) => trip.id.toString()}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleModal}>
                <Text style={styles.textStyle}>Add a New Trip</Text>
                <Ionicons style={styles.iconStyle} name="ios-add-circle-outline"  />
            </TouchableOpacity>
            <Modal 
                isVisible={isModalVisible}
                backdropColor='white'
                backdropOpacity={0.9}
            >
                <AddTripForm addTrip={addTrip} toggleModal={toggleModal}/>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10
    },
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 30
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(240, 83%, 93%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
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
