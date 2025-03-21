import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

import styles from './screenheader.style'
interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType; // Type for image sources in React Native
  dimension: string; // Dimension as a string (e.g., "60%")
}
const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension }) => {
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
        style={[styles.image, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default ScreenHeaderBtn;