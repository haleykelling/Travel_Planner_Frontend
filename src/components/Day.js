import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Day = ({day, index}) => {
    return (
        <View >
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
            <View style={styles.dayStyle}>
                {day.start_city === day.end_city 
                    ? <Text style={styles.cityHeadingStyle}>{day.start_city}</Text>
                    : <Text style={styles.cityHeadingStyle}>
                        {day.start_city} to {day.end_city}
                    </Text>             
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dayStyle: {
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
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 15,
    },
    cityHeadingBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    cityHeadingStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
    }
})

export default Day;
