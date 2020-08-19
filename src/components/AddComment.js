import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput } from 'react-native';
import { styles } from '../styles/Comment'


const AddComment = ({toggleModal, day, addComment}) => {
        
    const [text, setText] = useState('')
    
    const handleSubmit = () => {
        addComment(text, day.id)
        toggleModal()
    }

    const handleClose = () =>{
         toggleModal()
    }

    return (
        <View>
            <Text style={styles.headingStyle}>Add a Comment</Text>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Comment"
                value={text}
                onChangeText={setText}
                multiline={true}
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

export default AddComment;
