import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { styles } from '../styles/Home'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LoginScreen = ({navigation, setTokenValue, setToken}) => {

    const [login, setLogin] = useState(true)

    const toggleForm = () => setLogin(!login)

    return (
        <View style={styles.viewStyle}>
            <ImageBackground source={require('../../assets/boat_lake.jpg')} style={styles.backgroundStyle} >
                <Text style={[styles.headingStyle, { fontFamily: 'DancingScript_700Bold' }]}>Wanderlust</Text>
                {login &&
                    <LoginForm
                        toggleForm={toggleForm} 
                        setToken={setToken}
                        setTokenValue={setTokenValue}
                    />
                }
                {!login &&
                    <SignupForm 
                        toggleForm={toggleForm} 
                        setToken={setToken}
                        setTokenValue={setTokenValue}    
                    />
                }
            </ImageBackground>
        </View>
    )
}

export default LoginScreen;
