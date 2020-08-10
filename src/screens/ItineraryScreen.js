import React, {useState, useEffect} from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';
import Map from '../components/Map';


const daysUrl = 'http://localhost:3000/days'

const ItineraryScreen = ({route, navigation}) => {
    const {trip} = route.params

    const [days, setDays] = useState([])
    
    const sortedDays = () => days.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
    })

    useEffect(() => {
        fetch(`${daysUrl}?trip_id=${trip.id}`)
            .then(response => response.json())
            .then(result => {
                setDays(result)
            })
    }, [])
   
    return (
        <FlatList 
            data={sortedDays()}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item, index}) => <Day day={item} index={index} navigation={navigation}/>}
            scrollIndicatorInsets={{ right: 1 }}
            listKey="days"
        />
    );
    
    
}

export default ItineraryScreen;
