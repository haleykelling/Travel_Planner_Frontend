import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/Home'

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.viewStyle}>
            <ImageBackground source={require('../../assets/boat_lake.jpg')} style={styles.backgroundStyle} >
                <Text style={[styles.headingStyle, { fontFamily: 'DancingScript_700Bold' }]}>Wanderlust</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Trip')} >
                    <Text style={styles.textStyle}>plan your next adventure</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;
