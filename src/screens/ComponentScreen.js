import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greetingJSX = <Text>Hello to you bro</Text>
    const name = 'Ryan'

    return (
        <View>
            {greetingJSX}
            <Text style={styles.textStyle1}>Getting started with react native!</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;