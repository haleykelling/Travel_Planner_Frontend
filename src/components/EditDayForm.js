import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Itinerary'

const EditDayForm = ({toggleModal, editDay, dayId}) => {
    
    const [startCity, setStartCity] = useState('')
    const [endCity, setEndCity] = useState('')

    const handleSubmit = () => {
        const info = {
            start_city: startCity,
            end_city: endCity
        }
        
        editDay(info, dayId)
        toggleModal()
    }

    
    return (
        <View style={styles.formStyle}>
            <Text style={styles.formHeadingStyle}>Update Locations</Text>
            <TextInput
                style={styles.inputStyle} 
                placeholder="Starting City"
                value={startCity}
                onChangeText={setStartCity}
                autoCorrect={false}
            ></TextInput>
            <TextInput
                style={styles.inputStyle} 
                placeholder="End City"
                value={endCity}
                onChangeText={setEndCity}
                autoCorrect={false}
            ></TextInput>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={toggleModal}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default EditDayForm;
