import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
           <ImageDetail imgSrc={require("../../assets/beach.jpg")} imgDescription="the beach" />
           <ImageDetail imgSrc={require("../../assets/mountain.jpg")} imgDescription="the mountains" />
           <ImageDetail imgSrc={require("../../assets/forest.jpg")} imgDescription="coolski" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;