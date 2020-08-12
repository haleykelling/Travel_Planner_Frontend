import React, {useState, useEffect} from 'react';
import { Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';
import Map from '../components/Map';
import { updateLocale } from 'moment';


const daysUrl = 'http://localhost:3000/days'

const ItineraryScreen = ({route, navigation}) => {
    const {trip, activity, dayId, activityToDelete} = route.params

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

    useEffect(() => {
        if (dayId) {
            updateDays(dayId, activity)
        }
    }, [activity])
    
    useEffect(() => {
        if (activityToDelete) {
            deleteActivity(activityToDelete)
        }
    }, [activityToDelete])

    const updateDays = (dayId, newActivity) => {
        const daysNotChanging = days.filter(day => day.id !== dayId)
        const dayToChange = days.find(day => day.id === dayId)
        if (newActivity.type_of_activity === "Transportation"){
            dayToChange.transportations = [...dayToChange.transportations, newActivity]
        } else {
            dayToChange.activities = [...dayToChange.activities, newActivity]
        }
        setDays([...daysNotChanging, dayToChange])
    }
    
    const deleteActivity = (activityToDelete) => {
        const daysNotChanging = days.filter(day => day.id !== dayId)
        const dayToChange = days.find(day => day.id === dayId)
        if (activityToDelete.type_of_activity === "Transportation"){
            const newTransportations = dayToChange.transportations.filter(transportation => {
                return transportation.id !== activityToDelete.id
            })
            dayToChange.transportations = [...newTransportations]
        } else {
            const newActivities = dayToChange.activies.filter(activity => {
                return activity.id !== activityToDelete.id
            })
            dayToChange.activities = [...newActivities]
        }
        setDays([...daysNotChanging, dayToChange])

    }
   
    return (
        <FlatList 
            data={sortedDays()}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item, index}) => {
                return <Day 
                    day={item} 
                    index={index} 
                    navigation={navigation}
                    updateDays={updateDays} 
                    />
            }}
            scrollIndicatorInsets={{ right: 1 }}
        />
    );
    
    
}

export default ItineraryScreen;
