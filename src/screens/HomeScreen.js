import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <ImageBackground source={require('../../assets/boat_lake.jpg')} style={styles.backgroundStyle} >
                <Text style={styles.textStyle}>Home Screen</Text>
                <Button title="See My Trips" onPress={() => navigation.navigate('Trip')} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundStyle: {
        flex: 1,
        resizeMode: 'cover',
        width: 400,
        height: 400
    },
    textStyle: {
        fontSize: 26
    }
})

export default HomeScreen;
