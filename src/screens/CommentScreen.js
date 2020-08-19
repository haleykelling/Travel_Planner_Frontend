import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Comment'
import Comment from '../components/Comment';
import Modal from 'react-native-modal';
import AddComment from '../components/AddComment'

const commentsUrl = 'https://stormy-fjord-63158.herokuapp.com/comments'

const CommentScreen = ({route}) => {
    const {day} = route.params

    const [comments, setComments] = useState(day.comments)
    const [showAddComment, setShowAddComment] = useState(false)
    
    const toggleShowAddComment = () => setShowAddComment(!showAddComment)

    const addComment = (comment, id) => {
        fetch(commentsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: {text: comment, day_id: id}})
        })
        .then(response => response.json())
        .then(result => setComments([...comments, result]))    
        .catch(error => console.error(error))
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
            <TouchableOpacity style={styles.addCommentButtonStyle} onPress={toggleShowAddComment}>
                <Text style={styles.addCommentButtonText}>Add Comment</Text>
            </TouchableOpacity>
            <FlatList 
                data={comments}
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


export default CommentScreen;
