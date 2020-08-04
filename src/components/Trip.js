import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Trip = ({trip, navigation}) => {
    return (
        <TouchableOpacity 
            style={styles.buttonStyle} 
            onPress={() => navigation.navigate('Itinerary', {trip: trip})}
        >
            <Text style={styles.textStyle}>{trip.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginHorizontal: 30
    },
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: 'hsl(240, 83%, 93%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85,
    }
})

export default Trip;
