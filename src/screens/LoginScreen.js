import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { Raleway_100Thin, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { AppLoading } from 'expo'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LoginScreen = ({navigation, setTokenValue, setToken}) => {
    let [fontsLoaded] = useFonts({
        DancingScript_700Bold,
        Raleway_100Thin,
        Raleway_400Regular,
        Raleway_700Bold
    });

    const [login, setLogin] = useState(true)
    const [showForms, setShowForms] = useState(false)

    const toggleForm = () => {
        setLogin(!login)
    }

    
    if (!fontsLoaded){
        return <AppLoading />
    } else {
        return (
        <View style={styles.viewStyle}>
            <ImageBackground source={require('../../assets/boat_lake.jpg')} style={styles.backgroundStyle} >
                <Text style={[styles.headingStyle, { fontFamily: 'DancingScript_700Bold' }]}>Wanderlust</Text>
                <TouchableOpacity onPress={() => setShowForms(true)} >
                    <Text style={styles.textStyle}>plan your next adventure</Text>
                </TouchableOpacity>
                {showForms && login &&
                    <LoginForm
                        toggleForm={toggleForm} 
                        setToken={setToken}
                        setTokenValue={setTokenValue}
                    />
                }
                {showForms && !login &&
                    <SignupForm 
                        toggleForm={toggleForm} 
                        setToken={setToken}
                        setTokenValue={setTokenValue}    
                    />
                }
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
        fontFamily: 'Raleway_400Regular'
    }
})

export default LoginScreen;
