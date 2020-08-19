import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { styles } from '../styles/AddEditTrip';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditTripForm = ({trip, editTrip, toggleModal}) => {

    const [showStartDate, setShowStartDate] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)
    const [name, setName] = useState(trip.name)
    const [startDate, setStartDate] = useState(new Date(`${trip.start_date}T12:00:00`))
    const [endDate, setEndDate] = useState(new Date(`${trip.end_date}T12:00:00`))

    const toggleShowStartDate = () => setShowStartDate(!showStartDate)
    const toggleShowEndDate = () => setShowEndDate(!showEndDate)

    useEffect(() => {
        setName(trip.name)
        setStartDate(new Date(`${trip.start_date}T12:00:00`))
        setEndDate(new Date(`${trip.end_date}T12:00:00`))
    }, [trip]);

    const onChangeStart = (event, selectedDate) => {
        setStartDate(selectedDate)
    }
    
    const onChangeEnd = (event, selectedDate) => {
        setEndDate(selectedDate)
    }
    
    const handleSubmit = () => {
        const formData = {
            name: name,
            start_date: startDate,
            end_date: endDate
        }
        editTrip(trip.id, formData)
        toggleModal()
    }

    const handleClose = () =>{
        toggleModal() 
    }

    return (
        <View>
            <Text style={styles.headingStyle}>Edit {trip.name}</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Name of Trip"
                value={name}
                onChangeText={setName}
                />
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleShowStartDate}>
                <Text style={styles.textStyle}>{startDate.toDateString()}</Text>
            </TouchableOpacity>
            {showStartDate && (
                <DateTimePicker
                    value={startDate}
                    minimumDate={new Date()}
                    mode='date'
                    display='default'
                    textColor='hsl(278, 48%, 18%)'
                    onChange={onChangeStart}
                />
            )}
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleShowEndDate}>
                <Text style={styles.textStyle}>{endDate.toDateString()}</Text>
            </TouchableOpacity>
            {showEndDate && (
                <DateTimePicker
                    value={endDate}
                    minimumDate={startDate}
                    mode='date'
                    display='default'
                    textColor='hsl(278, 48%, 18%)'
                    onChange={onChangeEnd}
                />
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleSubmit}>
                    <Text style={styles.closeText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Text style={styles.closeText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default EditTripForm;
