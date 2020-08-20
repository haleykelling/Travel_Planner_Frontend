import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    eventStyle: {
        marginHorizontal: 10,
        marginBottom: 30,
        padding: 20,
        height: 270,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        justifyContent: 'space-between'
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320
    },
    headingStyle: {
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)'
    },
    detailsStyle: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'Raleway_400Regular',
        color: 'hsl(215, 90%, 20%)'
    },
    addressStyle: {
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16
    },
    iconStyle: {
        fontSize: 24,
        color: 'hsl(215, 30%, 40%)',
        textAlign: 'right'
    },
    largeIconStyle: {
        color: 'hsl(215, 90%, 20%)',
        fontSize: 30,
        marginLeft: 10
    },
    formHeadingStyle: {
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
    },
    addButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 5,
        marginBottom: 40,
        marginHorizontal: 5,
        height: 70,
        width: 230,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    commentButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 5,
        marginBottom: 40,
        marginHorizontal: 5,
        height: 70,
        width: 155,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    addIconStyle: {
        fontSize: 30,
        color: 'white',
        marginTop: 19,
        marginRight: 15,
    },
    addTextStyle: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 20,
        color: 'white',
        fontFamily: 'Raleway_700Bold'
    },
    selectorStyles: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'hsl(215, 30%, 40%)',
        paddingVertical: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    selectorText: {
        color: 'hsl(0, 0%, 80%)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16
    },
    selectedText: {
        color: 'white',
        fontFamily: 'Raleway_700Bold',
        fontSize: 23,
    },
    emptyStyle: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 20,
        color: 'hsl(0, 0%, 50%)',
        textAlign: 'center',
        marginTop: 50
    }
})

export {styles}