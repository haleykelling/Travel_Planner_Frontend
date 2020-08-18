import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_PLACES_API_KEY} from '@env'

const MapScreen = ({route}) => {
    const {days, trip} = route.params
    const [region, setRegion] = useState({})

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
        <>
            <MapView 
                style={{flex: 1}}
                region={region}
                provider={PROVIDER_GOOGLE}
            >
                {createMarkers()}
                {activityMarkers()}
                {transportationMarkers()}
            </MapView>
            <View style={{position: 'absolute', width: 415}}>
                <GooglePlacesAutocomplete 
                    placeholder='Search'
                    onPress={(data, details=null) => {
                        console.log(data, details)
                    }}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        location: `latitude=${region.latitude},longitude=${region.longitude}`,
                        radius: '100,000'
                    }}
                    styles={{
                        textInputContainer: {
                          backgroundColor: 'rgba(0,0,0,0)',
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                        },
                        textInput: {
                          marginLeft: 0,
                          marginRight: 0,
                          height: 38,
                          color: '#5d5d5d',
                          fontSize: 18,
                        },
                    }}
                />
            </View>
        </>
    );
}

export default MapScreen;
