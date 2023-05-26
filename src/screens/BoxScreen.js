import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'flex-end'
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        height: 200,
        alignItems: 'center'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20
        // margin: 20,
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject, // equivalent to below:
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
        // flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: -10
        // flex: 2
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4
    },
})

export default BoxScreen;