import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {FontAwesome} from '@expo/vector-icons';
import FormatTime from '../helpers/FormatTime';
import PickPhoto from '../helpers/PickPhoto';
import EditDayForm from './EditDayForm';

const Day = ({day, index, trip, navigation, editDay}) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const toggleModal = () => setIsModalVisible(!isModalVisible)

    const sortActivities = () => {
        const allActivities = day.activities.concat(day.transportations)
        return allActivities.sort((a, b) => a.start_time - b.start_time)
    }

    return (
        <View >
            <Text style={styles.headingStyle}>
                Day Number {index + 1} - {new Date(`${day.date}T12:00:00`).toDateString()}
            </Text>
            <TouchableOpacity 
                style={styles.dayStyle} 
                onPress={() => navigation.navigate('Day', {day: day, trip: trip})}
            >
                <View style={styles.infoStyle}>
                    {day.start_city === day.end_city 
                        ? <View style={styles.cityHeadingContainer}>
                            <Text style={styles.cityHeadingStyle}>{day.start_city}</Text>
                            <TouchableOpacity onPress={toggleModal}>
                                <FontAwesome name="edit" style={styles.iconStyle} />
                            </TouchableOpacity>    
                        </View>
                        : <View style={styles.cityHeadingContainer}>
                            <Text style={styles.cityHeadingStyle}>
                                {day.start_city} to {day.end_city}
                            </Text> 
                            <TouchableOpacity onPress={toggleModal}>
                                <FontAwesome name="edit" style={styles.iconStyle} />
                            </TouchableOpacity>  
                        </View>            
                    }
                    {day.start_city 
                        ? null 
                        : <TouchableOpacity onPress={toggleModal}>
                            <Text style ={styles.infoText}>Click here to add locations to your days!</Text>
                        </TouchableOpacity>
                    }
                    {day.transportations.length === 0 && day.activities.length === 0 
                        ? <Text style ={styles.infoText}>Click here to add events to your itinerary!</Text>
                        : <FlatList
                            data={sortActivities()}
                            renderItem={({item}) => {
                                return (
                                    <Text style={styles.infoText}>
                                        {item.start_time ? FormatTime(item.start_time) : null}
                                        {item.end_time ? " - " + FormatTime(item.end_time) + ":" : ":"}
                                        {" " + item.name}
                                    </Text>
                                )    
                            }}
                            keyExtractor={item => item.id.toString()}
                        />
                    }
                </View>
                <View>
                    <Image source={PickPhoto(day)} style={styles.imageStyle}/>
                </View>
                <Modal 
                    isVisible={isModalVisible}
                    backdropColor='white'
                    backdropOpacity={0.9}
                >
                    <EditDayForm 
                        editDay={editDay} 
                        toggleModal={toggleModal} 
                        dayId={day.id}
                    />
                </Modal>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dayStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 300,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        flexDirection: 'row',
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
        marginRight: 10,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
    },
    cityHeadingContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: 210
    },
    infoStyle: {
        flex: 3,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    imageStyle: {
        flex: 1,
        width: 150,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    infoText: {
        fontFamily: 'Raleway_400Regular',
        color: 'hsl(215, 90%, 20%)',
        fontSize: 16,
        lineHeight: 20,
        marginVertical: 10
    },
    iconStyle: {
        fontSize: 20,
        color: 'hsl(215, 30%, 40%)'
    }
})

export default Day;
