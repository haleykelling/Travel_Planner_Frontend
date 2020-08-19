import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
    backgroundStyle: {
        flex: 1,
        resizeMode: 'cover',
        width: 420,
        height: 1000,
        justifyContent: 'flex-start'
    },
    headingStyle: {
        fontSize: 75,
        color: 'hsl(215, 90%, 20%)',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 20
    },
    textStyle: {
        marginLeft: 35,      
        fontSize: 22,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
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