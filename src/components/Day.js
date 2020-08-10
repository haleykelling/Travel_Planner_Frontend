import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const Day = ({day, index, navigation}) => {
    return (
        <View >
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
            <TouchableOpacity style={styles.dayStyle} onPress={() => navigation.navigate('Day', {day: day})}>
                {day.start_city === day.end_city 
                    ? <Text style={styles.cityHeadingStyle}>{day.start_city}</Text>
                    : <Text style={styles.cityHeadingStyle}>
                        {day.start_city} to {day.end_city}
                    </Text>             
                }
            </TouchableOpacity>
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
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'Raleway_700Bold'
    },
    cityHeadingStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
        fontFamily: 'Raleway_400Regular'
    }
})

export default Day;
