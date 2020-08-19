import React, { useState, useEffect } from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = ({route}) => {
    const {days, trip} = route.params
    const [region, setRegion] = useState({
        latitude: 37.2228,
        longitude: 24.4395,
        latitudeDelta: 2,
        longitudeDelta: 3
    })

    useEffect(() => {
        if(trip.name === "Honeymoon to Greece"){
            setRegion({
                latitude: 37.2228,
                longitude: 24.4395,
                latitudeDelta: 2,
                longitudeDelta: 3
            })
        }else if(trip.name === "Trip to Yellowstone"){
            setRegion({
                latitude: 43.4799,
                longitude: -110.7624,
                latitudeDelta: 4,
                longitudeDelta: 4
            })
        }
    }, [])

    const dayCoordinates = days.map(day => {
        return {latitude: day.start_latitude, longitude: day.start_longitude, id: day.id, title: `Stay in ${day.start_city}`}
    })

    const activityMarkers = () => {
        let allActivities = []
        days.forEach(day => {
            allActivities = allActivities.concat(day.activities)  
        })
        return allActivities.map((activity, index) => {
            return <Marker 
                key={(index + 215).toString()}
                title={activity.name}
                coordinate={{latitude: activity.latitude, longitude: activity.longitude}} 
            />
        })
    }
    const transportationMarkers = () => {
        let allTransportations = []
        days.forEach(day => {
            allTransportations = allTransportations.concat(day.transportations)  
        })

        return allTransportations.map((transportation, index) => {
            return <Marker 
                key={(index + 115).toString()}
                title={transportation.name}
                coordinate={{latitude: transportation.latitude, longitude: transportation.longitude}} 
            />
        })
    }

    const createMarkers = () => {
        return dayCoordinates.map(coordinate => {
            return <Marker 
                key={coordinate.id.toString()} 
                title={coordinate.title}
                coordinate={{latitude: coordinate.latitude, longitude: coordinate.longitude}} 
            />
        })
    }

    
    return (
        <MapView 
            style={{flex: 1}}
            region={region}
            provider={PROVIDER_GOOGLE}
        >
            {createMarkers()}
            {activityMarkers()}
            {transportationMarkers()}
        </MapView>
    );
}

export default MapScreen;
