import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Trip from '../components/Trip';
import { Ionicons } from '@expo/vector-icons';

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
                renderItem={({item}) => <Trip trip={item} navigation={navigation}/>}
                keyExtractor={(trip) => trip.id}
            />
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Add a New Trip</Text>
                <Ionicons style={styles.iconStyle} name="ios-add-circle-outline"  />
            </TouchableOpacity>
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
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 30
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(240, 83%, 93%)',
        marginVertical: 15,
        marginHorizontal: 30,
        height: 85
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        marginTop: 27,
        marginRight: 30
    }
})

export default TripScreen;
