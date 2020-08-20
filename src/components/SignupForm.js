import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { styles } from '../styles/Home'
import AsyncStorage from '@react-native-community/async-storage';


const signupUrl = 'https://stormy-fjord-63158.herokuapp.com/users'

const SignupForm = ({toggleForm, setToken, setTokenValue}) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alerts, setAlerts] = useState('')

    const handleSubmit = () => {
        const user = {
            username,
            password
        }

        fetch(signupUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
            .then(response => {
                if(!response.ok){
                    return response.json().then(parsedResponse => {
                        setAlerts(parsedResponse.error)
                    })
                }
                return response.json()
            })
            .then(result => {
                if (result.token){
                    setAlerts('')
                    storeData(result.token)
                }
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
        <View style={styles.formStyle}>
            <Text style={styles.formHeadingStyle}>Sign Up</Text>
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
            {alerts !== '' ? <Text style={styles.alertStyle}>{alerts}</Text> : null}
             <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={toggleForm}>
                    <Text style={styles.buttonText}>Not New?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignupForm;
