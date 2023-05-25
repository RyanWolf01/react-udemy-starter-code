import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from "react";

const CounterScreen = () => {
    // let counter = 0; // this gets changed, but react doesn't watch and update it! So you need to use useState so that react watches it
    // const [counter, setCounter] = useState(0);
    
    const reducer = (state, action) => {
        if (action.type != 'change_count') return { state };

        return { ...state,  count: state.count + action.payload };

    }

    const [ state, dispatch ] = useReducer(reducer, { count: 0 });

    return (
        // <View>
        //     <Button title='Increase' onPress={() => setCounter(counter+1)} />
        //     <Button title='Decrease' onPress={() => setCounter(counter-1)} /> 
        //     <Text>Current Count: {counter}</Text>
        // </View>
        <View>
            <Button title='Increase' onPress={() => dispatch({ type: 'change_count', payload: 1})} />
            <Button title='Decrease' onPress={() => dispatch({ type: 'change_count', payload: -1})} />
            <Text>Current Count:{state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;