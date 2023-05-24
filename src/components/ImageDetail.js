import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

const ImageDetail = ({ imgSrc, imgDescription }) => {
    return (
        <View>
            <Image source={imgSrc}></Image>
            <Text>{imgDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;