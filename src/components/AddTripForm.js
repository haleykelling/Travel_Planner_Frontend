import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTripForm = ({toggleModal, addTrip, alerts, setAlerts}) => {
    
    const [showStartDate, setShowStartDate] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

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
        addTrip(formData)
        setName('')
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const handleClose = () =>{
        setAlerts('')
        toggleModal() 
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
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleShowStartDate}>
                <Text style={styles.textStyle}>{startDate.toDateString()}</Text>
            </TouchableOpacity>
            {showStartDate && (
                <DateTimePicker
                utcOffset={0}
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
                utcOffset={0}
                value={endDate}
                minimumDate={startDate}
                mode='date'
                display='default'
                textColor='hsl(278, 48%, 18%)'
                onChange={onChangeEnd}
                />
            )}
            {alerts !== '' ? <Text>{alerts}</Text> : null}
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
        marginVertical: 20,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    textStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
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

export default AddTripForm;
