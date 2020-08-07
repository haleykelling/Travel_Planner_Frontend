import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Day = ({day, index}) => {
    return (
        <View style={styles.dayStyle}>
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dayStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 230,
        backgroundColor: 'hsl(240, 70%, 85%)',
    },
    headingStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 5
    }
})

export default Day;
