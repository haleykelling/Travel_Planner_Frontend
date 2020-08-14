import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';


const signupUrl = 'https://stormy-fjord-63158.herokuapp.com/users'

const SignupForm = ({toggleForm}, setToken, setTokenValue) => {
    
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
            <Text style={styles.headingStyle}>Sign Up</Text>
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
            {alerts !== '' ? <Text>{alerts}</Text> : null}
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

export default SignupForm;
