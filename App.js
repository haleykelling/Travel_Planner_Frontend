import { StatusBar, setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { Raleway_100Thin, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { AppLoading } from 'expo'
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import TripScreen from './src/screens/TripScreen';
import ItineraryScreen from './src/screens/ItineraryScreen';
import DayScreen from './src/screens/DayScreen';
import MapScreen from './src/screens/MapScreen';
import CommentScreen from './src/screens/CommentScreen';


const Stack = createStackNavigator()

export default function App() {

  let [fontsLoaded] = useFonts({
    DancingScript_700Bold,
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_700Bold
  });

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

  const logout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        setToken(false)
        setTokenValue('')
      })
  }

  const loginNavigation = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Login">{(props) => <LoginScreen {...props} setTokenValue={setTokenValue} setToken={setToken} />}</Stack.Screen>
      </Stack.Navigator>
    )
  }


  const userNavigation = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trip" options={{headerRight: () => <Button onPress={logout} title="Logout" />}}>
          {(props) => <TripScreen {...props} tokenValue={tokenValue} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Itinerary" 
          component={ItineraryScreen} 
          options={{headerRight: () => <Button onPress={logout} title="Logout" />}}
        />
        <Stack.Screen 
          name="Day" 
          component={DayScreen} 
          options={{headerRight: () => <Button onPress={logout} 
          title="Logout" />}}
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen}
        />
        <Stack.Screen 
          name="Comment" 
          component={CommentScreen}
        />
      </Stack.Navigator>
    )
  }

  if (!fontsLoaded){
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        {token ? userNavigation() : loginNavigation()}
      </NavigationContainer>
    );
  }
}

