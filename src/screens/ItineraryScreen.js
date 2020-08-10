import React, {useState, useEffect} from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';
import Map from '../components/Map';
import { AppLoading } from 'expo';


const daysUrl = 'http://localhost:3000/days'

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params

    const [days, setDays] = useState([])
    
    const sortedDays = () => days.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })

    useEffect(() => {
        fetch(daysUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({trip_id: trip.id})
        })
            .then(response => response.json())
            .then(result => {
                setDays(result)
                setDays(sortedDays())
            })
    }, [])
    
    if (days.length === 0){
        return <AppLoading />
    } else {
        return (
            <FlatList 
                data={days}
                keyExtractor={(day) => day.id.toString()}
                renderItem={({item, index}) => <Day day={item} index={index} navigation={navigation}/>}
                ListHeaderComponent={<Map />}
            />
        );
    }
    
}

export default ItineraryScreen;
