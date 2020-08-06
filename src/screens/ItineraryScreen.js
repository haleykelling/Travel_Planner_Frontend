import React from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params
    const sorted_days = trip.days.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })
    
    return (
        <FlatList 
            data={sorted_days}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item}) => {
                return (
                    <>
                    <Text>Day Number {item.number}: {new Date(`${item.date}T12:00:00`).toDateString()}</Text>
                    </>
                )
            }}
        />
    );
}

export default ItineraryScreen;
