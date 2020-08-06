import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


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
                <TouchableOpacity>
                    <FontAwesome name="edit" size={24} color="hsl(0, 0%, 30%)" />
                </TouchableOpacity>
                <Modal
                    isVisible={isModalVisible}
                    backdropColor='white'
                    backdropOpacity={0.9}
                >
                    <EditTripForm editTrip={editTrip}/>
                </Modal>
                <TouchableOpacity onPress={() => deleteTrip(trip.id)}>
                    <AntDesign name="delete" size={24} color="hsl(0, 0%, 30%)" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        marginHorizontal: 30,
        alignSelf: 'center'
    },
    tripItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'hsl(240, 83%, 93%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 85,
        marginRight: 8
    }
})

export default Trip;
