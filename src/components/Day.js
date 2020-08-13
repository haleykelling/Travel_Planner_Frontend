import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import FormatTime from '../helpers/FormatTime'

const Day = ({day, index, trip, navigation}) => {
    
    const pickPhoto = () => {
        if (trip.name === "Honeymoon to Greece"){
            return require('../../assets/greece.jpg')
        } else if (trip.name === "Trip to Yellowstone"){
            return require('../../assets/yellowstone.jpg')
        }
    }

    return (
        <View >
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
            <TouchableOpacity 
                style={styles.dayStyle} 
                onPress={() => navigation.navigate('Day', {day: day})}
            >
                <View style={styles.infoStyle}>
                    {day.start_city === day.end_city 
                        ? <Text style={styles.cityHeadingStyle}>{day.start_city}</Text>
                        : <Text style={styles.cityHeadingStyle}>
                            {day.start_city} to {day.end_city}
                        </Text>             
                    }
                    {day.transportations.length === 0 && day.activities.length === 0 
                        ? <Text style ={styles.infoText}>Click here to add events to your itinerary!</Text>
                        : <> 
                        <FlatList
                            data={day.transportations}
                            renderItem={({item}) => {
                                return (
                                    <Text style={styles.infoText}>
                                        {item.start_time ? FormatTime(item.start_time) : null}
                                        {item.end_time ? " - " + FormatTime(item.end_time) + ":" : ":"}
                                        {" " + item.name}
                                    </Text>
                                )    
                            }}
                            listKey={(transportation) => transportation.id.toString()}
                        ></FlatList>
                        <FlatList
                            data={day.activities}
                            renderItem={({item}) => {
                                return (
                                    <Text style={styles.infoText}>
                                        {item.start_time ? FormatTime(item.start_time) : null} 
                                        {item.end_time ? " - " + FormatTime(item.end_time) + ":" : ":"}  
                                        {" " + item.name}
                                    </Text>
                                )    
                            }}
                            listKey={(activity) => activity.id.toString()}
                        ></FlatList>
                        </>
                    }
                </View>
                <View>
                    <Image source={pickPhoto()} style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dayStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 230,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        flexDirection: 'row'
    },
    headingStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
    },
    cityHeadingStyle: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)'
    },
    infoStyle: {
        flex: 3,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    imageStyle: {
        flex: 1,
        width: 160,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    infoText: {
        fontFamily: 'Raleway_400Regular',
        color: 'hsl(215, 90%, 20%)',
        fontSize: 16,
        lineHeight: 20
    }
})

export default Day;
