import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, SectionList} from 'react-native';
import Event from '../components/Event';
import AddEvent from '../components/AddEvent';

const DayScreen = ({route}) => {
    const {day} = route.params
    
    const activities = day.activities
    const transportations = day.transportations
    const activitiesSorted = activities.sort((a, b) => a.start_time - b.start_time)
    const transportationsSorted = transportations.sort((a, b) => a.end_time - b.start_time)
    const allEvents = [{
        title: 'Transportation', 
        data: transportationsSorted
    }, {
        title: 'Activities',
        data: activitiesSorted
    }]

    console.log(allEvents)
    
    return (
        <SectionList
            sections={allEvents}
            keyExtractor={(event) => event.id.toString()}
            renderItem={({item}) => <Event event={item}/>}
            renderSectionHeader={({section: { title }}) => <Text>{title}</Text>}
            ListEmptyComponent={<AddEvent />}
        />
    );
}

export default DayScreen;
