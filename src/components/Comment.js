import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({comment}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.commentStyle}>{comment.text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    commentStyle: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Raleway_400Regular',
        lineHeight: 30
    },
    viewStyle: {
        borderRadius: 5,
        backgroundColor: 'hsl(215, 30%, 40%)',
        margin: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.3,
    }
})

export default Comment;
