import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Day';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Accommodation = ({event, deleteEvent}) => {
    
    return (
        <View style={styles.eventStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.headingStyle}>{event.name}</Text>
                <FontAwesome5 name="hotel" style={styles.largeIconStyle} />
            </View>
            <Text style={styles.detailsStyle}>Contact Info: {event.phone_number}</Text>
            <Text style={styles.detailsStyle}>Reservation #{event.reservation_number}</Text>
            <Text style={styles.addressStyle}>{event.address}</Text>
            <TouchableOpacity onPress={() => deleteEvent(event)}>
                <AntDesign name="delete" style={styles.iconStyle} />
            </TouchableOpacity>
        </View>
    );
}

export default Accommodation;
