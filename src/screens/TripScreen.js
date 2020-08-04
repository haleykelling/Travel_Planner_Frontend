import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tripsUrl = 'http://localhost:3000/trips'

const TripScreen = ({navigation}) => {
    
    const [trips, setTrips] = useState({})

    useEffect(() => {
        fetch(tripsUrl)
            .then(response => response.json())
            .then(result => setTrips(result))
    }, [])

    return (
        <View>
            <Text style={styles.headingStyle}>Upcoming Trips</Text>
            <FlatList 
                style={styles.listStyle}
                data={trips}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Itinerary', {trip: item})}>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(trip) => trip.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10
    },
    textStyle: {
        backgroundColor: 'hsl(240, 83%, 93%)',
        opacity: 0.8,
        marginVertical: 15,
        marginHorizontal: 30,
        padding: 30,
        fontSize: 20
    }
})

export default TripScreen;
