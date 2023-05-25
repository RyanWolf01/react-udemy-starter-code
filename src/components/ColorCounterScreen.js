import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const ColorCounter = ({ onIncrease, onDecrease, title }) => {
    
    return (
        <View>
            <Text>{title}</Text>
            <Button 
                title={`Increase ${title}`}
                onPress={() => onIncrease()}
            />
            <Button 
                title={`Decrease ${title}`}
                onPress={() => onDecrease()}
            />
        </View>
    );
};  

const styles = StyleSheet.create({});

export default ColorCounter;