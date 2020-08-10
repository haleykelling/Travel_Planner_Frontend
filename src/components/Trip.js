import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import EditTripForm from './EditTripForm'


const Trip = ({trip, navigation, editTrip, deleteTrip}) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const toggleModal = () => setIsModalVisible(!isModalVisible)

    return (
        <View  style={styles.tripItemStyle} >
            <TouchableOpacity 
                onPress={() => navigation.navigate('Itinerary', {trip: trip})}
            >
                <Text style={styles.textStyle}>{trip.name}</Text>
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

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        marginHorizontal: 30,
        alignSelf: 'center',
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
    },
    tripItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'hsl(215, 62%, 90%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 85,
        marginRight: 8
    },
    modalStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
})

export default Trip;
