import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { AppLoading } from 'expo'

const HomeScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        DancingScript_700Bold,
        PlayfairDisplay_400Regular
    });
    
    if (!fontsLoaded){
        return <AppLoading />
    } else {
        return (
        <View style={styles.viewStyle}>
            <ImageBackground source={require('../../assets/boat_lake.jpg')} style={styles.backgroundStyle} >
                <Text style={[styles.headingStyle, { fontFamily: 'DancingScript_700Bold' }]}>Wanderlust</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Trip')} >
                    <Text style={styles.textStyle}>plan your next adventure</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )}
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
    backgroundStyle: {
        flex: 1,
        resizeMode: 'cover',
        width: 420,
        height: 1000,
        justifyContent: 'flex-start'
    },
    headingStyle: {
        fontSize: 75,
        color: 'hsl(215, 90%, 20%)',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 20
    },
    textStyle: {
        marginLeft: 35,      
        fontSize: 22,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'PlayfairDisplay_400Regular'
    }
})

export default HomeScreen;
