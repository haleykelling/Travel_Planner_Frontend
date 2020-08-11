import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import FormatTime from '../helpers/FormatTime'

const Day = ({day, index, navigation}) => {
    
    return (
        <View >
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
            <TouchableOpacity 
                style={styles.dayStyle} 
                onPress={() => navigation.navigate('Day', {day: day})}
            >
                {day.start_city === day.end_city 
                    ? <Text style={styles.cityHeadingStyle}>{day.start_city}</Text>
                    : <Text style={styles.cityHeadingStyle}>
                        {day.start_city} to {day.end_city}
                    </Text>             
                }
                <FlatList
                    data={day.transportations}
                    renderItem={({item}) => {
                        return (
                            <Text>
                                {item.start_time ? FormatTime(item.start_time) : null}
                                {item.end_time ? " - " + FormatTime(item.end_time) : null}
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
                            <Text>
                                {item.start_time ? FormatTime(item.start_time) : null} 
                                {item.end_time ? " - " + FormatTime(item.end_time) : null}  
                                {" " + item.name}
                            </Text>
                        )    
                    }}
                    listKey={(activity) => activity.id.toString()}
                ></FlatList>
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
    },
    headingStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'Raleway_700Bold'
    },
    cityHeadingStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginVertical: 10,
        fontFamily: 'Raleway_400Regular'
    }
})

export default Day;
