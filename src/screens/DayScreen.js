import React from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Event from '../components/Event';
import Map from '../components/Map';

const DayScreen = ({route, navigation}) => {
    const {day} = route.params
    const activities = day.activities
    const transportations = day.transportations
    const restaurants = day.restaurants
    const allEvents = activities.concat(transportations.concat(restaurants))
    const allEventsSorted = allEvents.sort_by((a, b) => a.start_time.to_i - b.start_time.to_i)
    
    return (
        <FlatList 
            data={allEventsSorted}
            keyExtractor={(event) => event.id.toString()}
            renderItem={({item, index}) => <Event item={item}/>}
            ListHeaderComponent={<Map />}
        />
    );
}

export default DayScreen;
