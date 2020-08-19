import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput, Picker, StyleSheet} from 'react-native';
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
            <Text style={styles.headingStyle}>Add a New Event</Text>
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
    
const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 28,
        alignSelf: 'center',
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    textStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
    },
    pickerStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular',
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
    buttonStyle: {
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
    closeButton: {
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
    closeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    }
})
    

export default AddEventForm;
