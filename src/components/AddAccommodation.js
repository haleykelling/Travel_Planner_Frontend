import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput } from 'react-native';
import { styles } from '../styles/Day'
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
            <Text style={styles.formHeadingStyle}>Add an Accommodation</Text>
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

export default AddAccommodation;
