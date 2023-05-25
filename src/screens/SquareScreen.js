import React, { useState, useReducer } from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounterScreen';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    // can use ternary operator for bounds checking on rgb values
    switch (action.type) {
        case 'change_red':
            return { ...state, red: state.red + action.payload };
        case 'change_blue':
            return { ...state, blue: state.blue + action.payload };
        case 'change_green':
            return { ...state, green: state.green + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [ state, dispatch ] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
    const { red, blue, green } = state;

    // const [red, setRed] = useState(0);
    // const [blue, setBlue] = useState(0);
    // const [green, setGreen] = useState(0);

    // const setColor = (color, amount) => {
    //     switch(color){
    //         case 'red':
    //             red + amount > 255 || red + amount < 0 ? null : setRed(red + amount);
    //         case 'blue':
    //             blue + amount > 255 || blue + amount < 0 ? null : setBlue(blue + amount);
    //         case 'green':
    //             green + amount > 255 || green + amount < 0 ? null : setGreen(green + amount);
    //     }
    // }

    return (
        <View>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })} title='Red'/>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })} title='Blue'/>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} onDecrease={() => dispatch({ color: 'change_green', payload: -1 * COLOR_INCREMENT })} title='Green'/>
            <View 
                style={{
                    height: 150,
                    width: 200,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SquareScreen;
