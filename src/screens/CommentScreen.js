import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Comment from '../components/Comment';
import Modal from 'react-native-modal';
import AddComment from '../components/AddComment'

const CommentScreen = ({route}) => {
    const {day} = route.params
    const [showAddComment, setShowAddComment] = useState(false)

    const toggleShowAddComment = () => setShowAddComment(!showAddComment)

    const addComment = (comment) => {
        console.log(comment)
    }
    
    return (
        <>
            <Modal
                isVisible={showAddComment}
                backdropColor='white'
                backdropOpacity={0.9}
            >
                <AddComment 
                    addComment={addComment}
                    toggleModal={toggleShowAddComment}
                    day={day}
                />
            </Modal>
            <TouchableOpacity style={styles.buttonStyle} onPress={toggleShowAddComment}>
                <Text style={styles.buttonText}>Add Comment</Text>
            </TouchableOpacity>
            <FlatList 
                style={styles.listStyle}
                data={day.comments}
                renderItem={({item}) => {
                    return <Comment 
                        comment={item} 
                    />
                }}
                keyExtractor={(comment) => comment.id.toString()}
            />
        </>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'hsl(215, 62%, 90%)',
        marginVertical: 15,
        padding: 12,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'hsl(215, 30%, 40%)',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    }
})

export default CommentScreen;
