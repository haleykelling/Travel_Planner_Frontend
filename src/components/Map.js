import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const Map = () => {
    return (
        <View >
            <Image style={styles.mapStyle} source={require('../../assets/Greece_Map.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        height: 400,
        width: 393,
        resizeMode: 'cover'
    }
})

export default Map;
