import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Trip';
import Modal from 'react-native-modal';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import EditTripForm from './EditTripForm'


const Trip = ({trip, navigation, editTrip, deleteTrip}) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const previousTrip = new Date(trip.end_date) < new Date()

    return (
        <View style={previousTrip ? styles.previousTrip : styles.tripItemStyle} >
            <TouchableOpacity 
                onPress={() => navigation.navigate('Itinerary', {trip: trip})}
            >
                <Text style={styles.tripTextStyle}>{trip.name}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={toggleModal}>
                    <FontAwesome name="edit" size={24} color="hsl(215, 30%, 40%)" />
                </TouchableOpacity>
                <Modal
                    isVisible={isModalVisible}
                    backdropColor='white'
                    backdropOpacity={0.9}
                >
                    <EditTripForm 
                        trip={trip} 
                        editTrip={editTrip} 
                        toggleModal={toggleModal}
                    />
                </Modal>
                <TouchableOpacity onPress={() => deleteTrip(trip.id)}>
                    <AntDesign name="delete" size={24} color="hsl(215, 30%, 40%)" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Trip;
