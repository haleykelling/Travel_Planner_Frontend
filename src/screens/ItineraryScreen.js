import React from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params
    
    return (
        <FlatList 
            data={trip.days}
            renderItem={({item}) => {
                return (
                    <>
                    <Text>Day Number {item.number}: {new Date(item.date).toDateString()}</Text>
                    </>
                )
            }}
        />
    );
}

export default ItineraryScreen;
