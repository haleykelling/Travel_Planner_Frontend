import React from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';
import Map from '../components/Map';

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params
    const sorted_days = trip.days.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })
    
    return (
        <FlatList 
            data={sorted_days}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item, index}) => <Day day={item} index={index} />}
            ListHeaderComponent={<Map />}
        />
    );
}

export default ItineraryScreen;
