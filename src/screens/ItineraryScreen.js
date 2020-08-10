import React from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';
import Map from '../components/Map';

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params
    const sortedDays = trip.days.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })
    console.log(trip)
    
    return (
        <FlatList 
            data={sortedDays}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item, index}) => <Day day={item} index={index} navigation={navigation}/>}
            ListHeaderComponent={<Map />}
        />
    );
}

export default ItineraryScreen;
