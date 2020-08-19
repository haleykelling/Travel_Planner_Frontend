import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headingStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginVertical: 10,
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_700Bold'
    },
    textStyle: {
        fontSize: 22,
        alignSelf: 'center',
        marginLeft: 30,
        color: 'white',
        fontFamily: 'Raleway_700Bold'
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(215, 30%, 40%)',
        marginTop: 15,
        marginBottom: 50,
        marginHorizontal: 30,
        height: 85,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.8,
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        marginTop: 27,
        marginRight: 30
    },
    modalStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    tripTextStyle: {
        fontSize: 22,
        marginHorizontal: 30,
        alignSelf: 'center',
        color: 'hsl(215, 90%, 20%)',
        fontFamily: 'Raleway_400Regular'
    },
    tripItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'hsl(215, 62%, 90%)',
        marginTop: 40,
        marginHorizontal: 30,
        height: 85,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 40%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    previousTrip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'hsl(215, 40%, 75%)',
        marginTop: 40,
        marginHorizontal: 30,
        height: 85,
        borderRadius: 5,
        shadowColor: 'hsl(0, 0%, 20%)',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.6,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 85,
        marginRight: 8
    },
})

export { styles }