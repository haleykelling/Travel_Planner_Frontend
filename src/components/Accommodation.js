import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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

export default Accommodation;
