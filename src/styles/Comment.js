import {StyleSheet} from 'react-native';

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
    },
    addCommentButtonStyle: {
        backgroundColor: 'hsl(215, 62%, 90%)',
        marginVertical: 15,
        padding: 12,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.5,
        alignSelf: 'center'
    },
    addCommentButtonText: {
        color: 'hsl(215, 30%, 40%)',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    },
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
    pickerStyle: {
        fontSize: 24,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular',
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

export {styles}