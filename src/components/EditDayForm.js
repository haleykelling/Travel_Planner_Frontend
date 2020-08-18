import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

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
            <Text style={styles.headingStyle}>Update Locations</Text>
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
            {/* {alerts !== '' ? <Text style={styles.alertStyle}>{alerts}</Text> : null} */}
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

const styles = StyleSheet.create({
    formStyle: {
        marginVertical: 50,
        marginHorizontal: 30,
        backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
        justifyContent: 'space-around'
    },
    headingStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginVertical: 20,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    inputStyle: {
        fontSize: 24,
        fontFamily: 'Raleway_400Regular',
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(215, 62%, 95%)',
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
    buttonStyle: {
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
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    },
    alertStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
        marginVertical: 10
    }
})

export default EditDayForm;
