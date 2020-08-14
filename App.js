import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import TripScreen from './src/screens/TripScreen';
import ItineraryScreen from './src/screens/ItineraryScreen';
import DayScreen from './src/screens/DayScreen';

const Stack = createStackNavigator()

export default function App() {

  const [token, setToken] = useState(false)
  const [tokenValue, setTokenValue] = useState('')

  const getData = async () => {
    AsyncStorage.getItem('token')
      .then(result => {
        if(result !== null){
          setTokenValue(result)
          setToken(true)
        } else {
          setToken(false)
        }

      })    
      .catch(() => setToken(false))
  }

  useEffect(() => {
    getData()
  }, [])

  const loginNavigation = (
    <Stack.Navigator>
      <Stack.Screen name="Login">{(props) => <LoginScreen {...props} setTokenValue={setTokenValue} setToken={setToken} />}</Stack.Screen>
    </Stack.Navigator>
  )

  const userNavigation = (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trip">{(props) => <TripScreen {...props} tokenValue={tokenValue} />}</Stack.Screen>
      <Stack.Screen name="Itinerary" component={ItineraryScreen} />
      <Stack.Screen name="Day" component={DayScreen} />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      {token ? userNavigation : loginNavigation}
    </NavigationContainer>
  );
}

