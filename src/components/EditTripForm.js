import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditTripForm = ({trip, editTrip, toggleModal}) => {
    
    const [showStartDate, setShowStartDate] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)
    const [name, setName] = useState(trip.name)
    const [startDate, setStartDate] = useState(new Date(trip.start_date))
    const [endDate, setEndDate] = useState(new Date(trip.end_date))

    const toggleShowStartDate = () => setShowStartDate(!showStartDate)
    const toggleShowEndDate = () => setShowEndDate(!showEndDate)


    const onChangeStart = (event, selectedDate) => {
        setStartDate(selectedDate)
        setEndDate(selectedDate)
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
        fontSize: 24,
    },
    inputStyle: {
        fontSize: 24,
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(240, 83%, 93%)',
    },
    buttonStyle: {
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

export default EditTripForm;
