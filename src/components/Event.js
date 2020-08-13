import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FormatTime from '../helpers/FormatTime'

const Event = ({event, deleteEvent}) => {
    return (
        <View style={styles.eventStyle}>
            <Text style={styles.headingStyle}>{event.name}</Text>
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
        height: 230,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        justifyContent: 'space-between'
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
    }
})

export default Event;
