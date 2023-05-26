import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none' // refer to below!
                autoCorrect={false} // for emails, passwords, usernames, etc. make sure you use this!!
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            { name.length <= 5 ? <Text>Name must be longer than 5 chars</Text> : null }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;
