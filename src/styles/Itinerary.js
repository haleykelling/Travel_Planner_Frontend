import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
        marginVertical: 10
    },
    dayStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 300,
        backgroundColor: 'hsl(215, 62%, 90%)',
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
        flexDirection: 'row',
    },
    dayHeadingStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
    },
    cityHeadingStyle: {
        fontSize: 18,
        marginVertical: 10,
        marginRight: 10,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
    },
    cityHeadingContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: 210
    },
    infoStyle: {
        flex: 3,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    imageStyle: {
        flex: 1,
        width: 150,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    infoText: {
        fontFamily: 'Raleway_400Regular',
        color: 'hsl(215, 90%, 20%)',
        fontSize: 16,
        lineHeight: 20,
        marginVertical: 10
    },
    iconStyle: {
        fontSize: 20,
        color: 'hsl(215, 30%, 40%)'
    },
    formStyle: {
        marginVertical: 50,
        marginHorizontal: 30,
        backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
        justifyContent: 'space-around'
    },
    formHeadingStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginVertical: 20,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    inputStyle: {
        fontSize: 24,
        fontFamily: 'Raleway_400Regular',
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'hsl(215, 62%, 95%)',
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
    buttonStyle: {
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
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold'
    },
    alertStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway_700Bold',
        color: 'hsl(215, 90%, 20%)',
        marginVertical: 10
    }
})

export {styles}