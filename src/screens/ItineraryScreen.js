import React, {useState, useEffect} from 'react';
import { Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Day from '../components/Day';


const daysUrl = 'https://stormy-fjord-63158.herokuapp.com/days'

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
            const newActivities = dayToChange.activities.filter(activity => {
                return activity.id !== activityToDelete.id
            })
            dayToChange.activities = [...newActivities]
        }
        setDays([...daysNotChanging, dayToChange])
    }

    const editDay = (day, id) => {
        
        fetch(`${daysUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({day: day})
        })
            .then(response => response.json())
            .then(result => {
                const daysNotChanging = days.filter(day => day.id !== id)
                setDays([...daysNotChanging, result])
            })
    }
   
    return (
        <>
        <Text style={styles.headingStyle}>{trip.name}</Text>
        <Button title="See Map" onPress={() => navigation.navigate('Map', {days: days, trip: trip})} />
        <FlatList 
            data={sortedDays()}
            keyExtractor={(day) => day.id.toString()}
            renderItem={({item, index}) => {
                return <Day 
                    day={item} 
                    index={index} 
                    trip={trip}
                    navigation={navigation}
                    editDay={editDay}
                    />
            }}
            scrollIndicatorInsets={{ right: 1 }}
        />
        </>
    );    
}

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
        marginVertical: 10
    }
})

export default ItineraryScreen;
