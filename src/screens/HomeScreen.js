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
