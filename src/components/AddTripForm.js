import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const AddTripForm = ({toggleModal, addTrip}) => {
    
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [numberOfDays, setNumberOfDays] = useState(null)
    
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
        setStartDate('')
        setEndDate('')
        setNumberOfDays('')
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
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Start Date"
                value={startDate}
                onChangeText={setStartDate}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="End Date"
                value={endDate}
                onChangeText={setEndDate}
                />
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
