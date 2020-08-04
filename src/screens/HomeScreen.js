import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Home Screen</Text>
            <Button title="See My Trips" onPress={() => navigation.navigate('Trip')} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 26
    }
})

export default HomeScreen;
