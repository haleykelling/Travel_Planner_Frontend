import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import { styles } from '../styles/Itinerary';
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
            <Text style={styles.dayHeadingStyle}>
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
                            keyExtractor={item => `${item.type_of_activity}${item.id}`}
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

export default Day;
