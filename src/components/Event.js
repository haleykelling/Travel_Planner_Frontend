import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FormatTime from '../helpers/FormatTime'

const Event = ({event}) => {
    console.log(event)
    return (
        <View style={styles.eventStyle}>
            <Text style={styles.headingStyle}>{event.name}</Text>
            <Text style={styles.headingStyle}>
                {event.start_time ? FormatTime(event.start_time) : null} - 
                {event.end_time ? FormatTime(event.end_time) : null}
            </Text>
            <Text style={styles.detailsStyle}>{event.details}</Text>
            <Text style={styles.addressStyle}>{event.address}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    eventStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        height: 230,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    headingStyle: {
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Raleway_700Bold'
    },
    detailsStyle: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'Raleway_400Regular'
    },
    addressStyle: {
    }
})

export default Event;
