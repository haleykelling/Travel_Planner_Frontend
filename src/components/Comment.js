import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/Comment'


const Comment = ({comment}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.commentStyle}>{comment.text}</Text>
        </View>
    );
}

export default Comment;
