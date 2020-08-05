import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTripForm = ({toggleModal, addTrip}) => {
    
    const [showStartDate, setShowStartDate] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfDays, setNumberOfDays] = useState(null)

    const toggleShowStartDate = () => setShowEndDate(!showEndDate)
    const toggleShowEndDate = () => setShowStartDate(!showStartDate)


    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate || startDate
        setStartDate(currentDate)
        toggleShowStartDate()
    }

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || endDate
        setEndDate(currentDate)
        toggleShowEndDate()
    }
    
    const handleSubmit = () => {
        toggleModal()
        const formData = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            number_of_days: numberOfDays
        }

        addTrip(formData)
        setName('')
        setStartDate(new Date())
        setEndDate(new Date())
        setNumberOfDays(null)
    }

    return (
        <View>
            <Text style={styles.headingStyle}>Add a New Trip</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Name of Trip"
                value={name}
                onChangeText={setName}
                />
            <TouchableOpacity onPress={toggleShowStartDate}>
                <Text >Choose Start Date</Text>
            </TouchableOpacity>
            {showStartDate && (
                <DateTimePicker
                testID="dateTimePicker"
                value={startDate}
                mode='date'
                display="default"
                onChange={onChangeStart}
                />
            )}
            <TouchableOpacity onPress={toggleShowEndDate}>
                <Text >Choose End Date</Text>
            </TouchableOpacity>
            {showEndDate && (
                <DateTimePicker
                testID="dateTimePicker"
                value={endDate}
                mode='date'
                display="default"
                onChange={onChangeEnd}
                />
            )}
            <Text style={styles.textStyle}>OR</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Number of Days"
                value={numberOfDays}
                onChangeText={setNumberOfDays}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleSubmit}>
                    <Text style={styles.closeText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                    <Text style={styles.closeText}>Close Form</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    textStyle: {
        fontSize: 20,
        marginVertical: 10,
        alignSelf: 'center',
    },
    inputStyle: {
        fontSize: 24,
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(240, 83%, 93%)',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    closeButton: {
        backgroundColor: 'hsl(278, 48%, 18%)',
        marginVertical: 15,
        padding: 12,
        width: 130,
    },
    closeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddTripForm;
