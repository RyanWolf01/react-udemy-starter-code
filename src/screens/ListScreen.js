import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    // should add key prop to help react native track items being
    // displayed and update individual items rather than entire list
    // key must be string, consistent between renders, unique compared to other data in list
    const friends = [
        { name: 'Friend #1'},
        { name: 'Friend #2'},
        { name: 'Friend #3'},
        { name: 'Friend #4'},
        { name: 'Friend #5'},
        { name: 'Friend #6'},
        { name: 'Friend #7'},
        { name: 'Friend #8'},
        { name: 'Friend #9'},
    ];

    /*
    const friends = [
        { name: 'Friend #1', key: '1'},
        { name: 'Friend #2', key: '2'},
        { name: 'Friend #3', key: '3'},
        { name: 'Friend #4', key: '4'},
        { name: 'Friend #5', key: '5'},
        { name: 'Friend #6', key: '6'},
        { name: 'Friend #7', key: '7'},
        { name: 'Friend #8', key: '8'},
        { name: 'Friend #9', key: '9'},
    ];
    */

    return (
        <FlatList 
            // horizontal // allows for horizontal scrolling
            // showsHorizontalScrollIndicator={false} // don't show horizontal scroll bar
            keyExtractor={(friend) => friend.name} // friend.name just has to be unique, doesn't matter what key is (pretty sure)
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;