import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = ({route}) => {
    const {days, trip} = route.params
    const [initialRegion, setInitialRegion] = useState({})

    useEffect(() => {
        if(trip.name === "Honeymoon to Greece"){
            setInitialRegion({
                latitude: 37.2228,
                longitude: 24.4395,
                latitudeDelta: 2,
                longitudeDelta: 3
            })
        }else if(trip.name === "Trip to Yellowstone"){
            setInitialRegion({
                latitude: 43.4799,
                longitude: -110.7624,
                latitudeDelta: 4,
                longitudeDelta: 4
            })
        }
    }, [])

    const dayCoordinates = days.map(day => {
        return {latitude: day.start_latitude, longitude: day.start_longitude, id: day.id}
    })

    const activityMarkers = () => {
        let allActivities = []
        days.forEach(day => {
            allActivities = allActivities.concat(day.activities)  
        })
        return allActivities.map(activity => {
            return <Marker 
                key={activity.id.toString()} 
                coordinate={{latitude: activity.latitude, longitude: activity.longitude}} 
            />
        })
    }

    const createMarkers = () => {
        console.log(activityMarkers())
        return dayCoordinates.map(coordinate => {
            return <Marker 
                key={coordinate.id.toString()} 
                coordinate={{latitude: coordinate.latitude, longitude: coordinate.longitude}} 
            />
        })
    }
    
    return (
        <MapView 
            style={{flex: 1}}
            initialRegion={initialRegion}
            provider={PROVIDER_GOOGLE}
        >
            {createMarkers()}
            {activityMarkers()}
        </MapView>
    );
}

export default MapScreen;
