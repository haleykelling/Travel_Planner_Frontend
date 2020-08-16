import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = () => {
    return (
        <MapView 
            style={{flex: 1}}
            initialRegion={{
                latitude: 37.308,
                longitude: 24.584,
                latitudeDelta: 2,
                longitudeDelta: 3
            }}
            provider={PROVIDER_GOOGLE}
        >
            <Marker coordinate={{latitude: 37.9838, longitude: 23.7275}} />
            <Marker coordinate={{latitude: 36.4618, longitude: 25.3753}} />
            <Marker coordinate={{latitude: 37.1036, longitude: 25.3777}} />
            <Marker coordinate={{latitude: 37.0854, longitude: 25.1515}} />
        </MapView>
    );
}

export default MapScreen;
