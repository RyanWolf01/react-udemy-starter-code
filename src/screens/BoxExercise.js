import React from 'react';
import {View, StyleSheet} from 'react-native';

const BoxExercise = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.box1} />
            <View style={styles.box2Parent}>
                <View style={styles.box2} />
            </View>
            <View style={styles.box3} />
        </View>
    );
}

// way 1
const styles2 = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    box2: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        top: 100
    },
    box3: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
    }
});

// way 2
const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box1: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    box2Parent: {
        height: 100,
        justifyContent: 'flex-end',
    },
    box2: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        top: 100
    },
    box3: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
    }
});

export default BoxExercise;
