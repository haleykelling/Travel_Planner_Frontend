import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const Event = ({event}) => {
    return (
        <View style={styles.eventStyle}>
            <Text style={styles.headingStyle}>
                {event.start_time} - {event.end_time}
                {event.name}
                {event.details}
                {event.address}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    eventStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
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
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'PlayfairDisplay_700Bold'
    },
    cityHeadingStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
        fontFamily: 'PlayfairDisplay_400Regular'
    }
})

export default Event;
