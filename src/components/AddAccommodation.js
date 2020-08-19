import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';
import FormatDays from '../helpers/FormatDays';
import CustomMultiPicker from "react-native-multiple-select-list";

const AddAccommodation = ({toggleModal, days, addAccommodation}) => {
        
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [reservationNumber, setReservationNumber] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [selectedDays, setSelectedDays] = useState([])
    
    const selectorData = days.map(day => {
        return day.date
    })

    const handleSubmit = () => {
        const dayIds = FormatDays(selectedDays, days)
        const formData = {
            day_ids: dayIds,
            name: name,
            address: address,
            reservation_number: reservationNumber,
            phone_number: phoneNumber
        }
        addAccommodation(formData)
        toggleModal()
    }

    const handleClose = () =>{
         toggleModal()
    }

    const handleSelectChange = (selectedItem) => {
        const newArray = selectedItem.slice(1)
        setSelectedDays(newArray)
    }


    return (
        <View>
            <Text style={styles.headingStyle}>Add an Accommodation</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Name"
                value={name}
                onChangeText={setName}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Reservation Number"
                value={reservationNumber}
                onChangeText={setReservationNumber}
                />
            <CustomMultiPicker
                options={selectorData}
                search={false} 
                multiple={true} 
                key={"label"}
                returnValue={"label"}
                callback={handleSelectChange}
                rowBackgroundColor={"#eee"}
                rowHeight={45}
                rowRadius={5}
                iconColor={"hsl(215, 30%, 40%)"}
                iconSize={36}
                selectedIconName={"ios-checkmark"}
                scrollViewHeight={300}
                selected={[1]}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleSubmit}>
                    <Text style={styles.closeText}>Submit</Text>
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
    

export default AddAccommodation;
