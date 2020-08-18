import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FormatTime from '../helpers/FormatTime';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 

const Event = ({event, deleteEvent}) => {
    const typeOfIcon = () => {
        switch (event.type_of_activity){
            case "Transportation":
                return <FontAwesome5 name="plane" style={styles.largeIconStyle} />
            case "Sightseeing":
                return <FontAwesome5 name="binoculars" style={styles.largeIconStyle} />
            case "History":
                return <FontAwesome5 name="landmark" style={styles.largeIconStyle} />
            case "Food/Drink":
                return <MaterialCommunityIcons name="food" size={34} color="hsl(215, 90%, 20%)" />
            case "Art/Culture":
                return <FontAwesome5 name="paint-brush" style={styles.largeIconStyle} />
            case "General":
                return <MaterialIcons name="event" style={styles.largeIconStyle} />
        }

    }
    
    return (
        <View style={styles.eventStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.headingStyle}>{event.name}</Text>
                {typeOfIcon()}
            </View>
            <Text style={styles.headingStyle}>
                {event.start_time ? FormatTime(event.start_time) : null}
                {event.end_time ? " - " + FormatTime(event.end_time) : null}
            </Text>
            <Text style={styles.detailsStyle}>{event.details}</Text>
            <Text style={styles.addressStyle}>{event.address}</Text>
            <TouchableOpacity onPress={() => deleteEvent(event)}>
                <AntDesign name="delete" style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    eventStyle: {
        marginHorizontal: 10,
        marginBottom: 30,
        padding: 20,
        height: 270,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        justifyContent: 'space-between'
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320
    },
    headingStyle: {
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)'
    },
    detailsStyle: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'Raleway_400Regular',
        color: 'hsl(215, 90%, 20%)'

    },
    addressStyle: {
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16
    },
    iconStyle: {
        fontSize: 24,
        color: 'hsl(215, 30%, 40%)',
        textAlign: 'right'
    },
    largeIconStyle: {
        color: 'hsl(215, 90%, 20%)',
        fontSize: 30,
        marginLeft: 10
    }
})

export default Event;
