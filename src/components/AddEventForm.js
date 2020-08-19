import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput, Picker } from 'react-native';
import { styles } from '../styles/Day'
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEventForm = ({toggleModal, addActivity, addTransportation, day}) => {
        
    const [activityType, setActivityType] = useState('General')
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [address, setAddress] = useState('')
    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())
    const [showStartTime, setShowStartTime] = useState(false)
    const [showEndTime, setShowEndTime] = useState(false)

    const toggleShowStartTime = () => setShowStartTime(!showStartTime)
    const toggleShowEndTime = () => setShowEndTime(!showEndTime)

    const onChangeStart = (event, selectedTime) => {
        setStartTime(selectedTime)
    }
    
    const onChangeEnd = (event, selectedTime) => {
        setEndTime(selectedTime)
    }
    
    const handleSubmit = () => {
        const startTimeInteger = formatTimeToInteger(startTime)
        const endTimeInteger = formatTimeToInteger(endTime)

        const formData = {
            type_of_activity: activityType,
            name: name,
            details: details,
            address: address,
            start_time: startTimeInteger,
            end_time: endTimeInteger,
            day_id: day.id
        }

        if (activityType === 'Transportation'){
            addTransportation(formData)
        } else {
            addActivity(formData)
        }
        toggleModal()
        setActivityType('General')
        setName('')
        setDetails('')
        setAddress('')
        setStartTime(new Date())
        setEndTime(new Date())
    }

    const handleClose = () =>{
        toggleModal() 
    }

    const formatTime = (time) => {
        const string = time.toLocaleTimeString()
        const formatted = [string.slice(0, -6), string.slice(-3)].join('')
        return formatted
    }

    const formatTimeToInteger = (time) => {
        const timeString = formatTime(time)
        if (timeString.slice(-2) === 'AM' && timeString.slice(0, 2) === '12'){
            const integer = parseInt(timeString.slice(0, -3).split(':').join(''))
            return integer - 1200
        } else if (timeString.slice(-2) === 'AM'){
            return parseInt(timeString.slice(0, -3).split(':').join(''))
        } else {
            const integer = parseInt(timeString.slice(0, -3).split(':').join(''))
            return integer + 1200
        }
    }

    return (
        <View>
            <Text style={styles.formHeadingStyle}>Add a New Event</Text>
            <Picker
                selectedValue={activityType}
                onValueChange={setActivityType}
                itemStyle={styles.pickerStyle}
                style={{height: 165}}
            >
                <Picker.Item label="General" value="General" />
                <Picker.Item label="Transportation" value="Transportation" />
                <Picker.Item label="Sightseeing" value="Sightseeing" />
                <Picker.Item label="Food/Drink" value="Food/Drink" />
                <Picker.Item label="Art/Culture" value="Art/Culture" />
                <Picker.Item label="History" value="History" />
            </Picker>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Name of Event"
                value={name}
                onChangeText={setName}
                autoCorrect={false}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Details"
                value={details}
                onChangeText={setDetails}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                autoCorrect={false}
                />
            <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={() => {
                    toggleShowStartTime()
                    setShowEndTime(false)
                }}
            >
                <Text style={styles.textStyle}>{formatTime(startTime)}</Text>
            </TouchableOpacity>
            {showStartTime && (
                <DateTimePicker
                utcOffset={0}
                value={startTime}
                mode='time'
                display='default'
                textColor='hsl(278, 48%, 18%)'
                onChange={onChangeStart}
                minuteInterval={15}
                />
                )}
            <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={() => {
                    toggleShowEndTime()
                    setShowStartTime(false)
                }}
            >
                <Text style={styles.textStyle}>{formatTime(endTime)}</Text>
            </TouchableOpacity>
            {showEndTime && (
                <DateTimePicker
                utcOffset={0}
                value={endTime}
                minimumDate={startTime}
                mode='time'
                display='default'
                textColor='hsl(278, 48%, 18%)'
                onChange={onChangeEnd}
                minuteInterval={15}
                />
                )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleSubmit}>
                    <Text style={styles.closeText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Text style={styles.closeText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
    

export default AddEventForm;
