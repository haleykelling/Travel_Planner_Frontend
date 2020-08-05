import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const AddTripForm = () => {
    return (
        <View>
            <Text style={styles.headingStyle}>Add a New Trip</Text>
            <TextInput style={styles.inputStyle} placeholder="Name of Trip"/>
            <TextInput style={styles.inputStyle} placeholder="Start Date"/>
            <TextInput style={styles.inputStyle} placeholder="End Date"/>
            <Text style={styles.textStyle}>OR</Text>
            <TextInput style={styles.inputStyle} placeholder="Number of Days"/>
        </View>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    textStyle: {
        fontSize: 20,
        marginVertical: 10,
        alignSelf: 'center',
    },
    inputStyle: {
        fontSize: 24,
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(240, 83%, 93%)',
    }
})

export default AddTripForm;
