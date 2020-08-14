import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const loginUrl = 'http://localhost:3000/login'

const LoginForm = ({toggleForm, setToken, setTokenValue}) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const user = {
            username,
            password
        }

        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
            .then(response => response.json())
            .then(result => {
                storeData(result.token)
            })
    }

    const storeData = async(value) => {
        try {
            await AsyncStorage.setItem('token', value)
            setTokenValue(value)
            setToken(true)
        } catch(e) {
            console.error(e)
            setToken(false)
        }
    }
    
    return (
        <View>
            <Text style={styles.headingStyle}>Log In</Text>
            <TextInput
                style={styles.inputStyle} 
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize='none'
                autoCorrect={false}
            ></TextInput>
            <TextInput
                style={styles.inputStyle} 
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            ></TextInput>
             <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={toggleForm}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 28,
        alignSelf: 'center',
        marginVertical: 20,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    textStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
    },
    inputStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular',
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle: {
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginVertical: 15,
        padding: 12,
        width: 130,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    }
})

export default LoginForm;
