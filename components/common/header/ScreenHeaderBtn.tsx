import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ImageStyle } from 'react-native';

//import styles from './screenheader.style'

// Define styles explicitly
const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  } as ImageStyle, // Explicitly type as ImageStyle
});
interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType; 
  dimension: string; 
}
const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ 
  iconUrl, 
  dimension 
}) =>  {
  console.log('ScreenHeaderBtn is working');
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
        style={[styles.image, { width: parseFloat(dimension), height: parseFloat(dimension) }]}
      />
      <Text style={{ fontSize: 16, color: '#000' }}>Header Button</Text>
    </TouchableOpacity>
  );
};
export default ScreenHeaderBtn;