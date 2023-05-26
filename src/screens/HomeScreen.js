import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => { // can destructure with ({ navigate })
  // Button for very simple buttons
  // TouchableOpacity else
  return (
    <View> 
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go to Components Demo'
      />

      <Button 
        onPress={() => props.navigation.navigate('ImageScreen')}
        title='Go to ImageScreens'
      />

      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />

      <Button
        title='Go to Color Demo'
        onPress={() => props.navigation.navigate('Color')}
      />

      <Button
        title='Go to Color Counter'
        onPress={() => props.navigation.navigate('ColorCounter')}
      />

      <Button
        title='Go to Text Screen'
        onPress={() => props.navigation.navigate('Text')}
      />

      <Button
        title='Go to Box Screen'
        onPress={() => props.navigation.navigate('Box')}
      />

      <Button
        title='Go to Box Exercise'
        onPress={() => props.navigation.navigate('BoxExercise')}
      />


      {/* when anything inside TouchableOpacity pressed, it registers */}
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
