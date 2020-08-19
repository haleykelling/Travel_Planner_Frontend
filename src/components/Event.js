import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Day';
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

export default Event;
