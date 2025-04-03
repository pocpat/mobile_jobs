import React from "react";
import { View, Text } from "react-native";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ImageStyle,
  DimensionValue,
} from "react-native";
import styles from './screenheader.style'

// Define styles explicitly
// const styles = StyleSheet.create({
//   image: {
//     resizeMode: "contain",
//   } as ImageStyle, // Explicitly type as ImageStyle
// });
interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: () => void;
}
const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  console.log("ScreenHeaderBtn is working");
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
      <Text style={{ fontSize: 16, color: "#000" }}>Header Button</Text>
    </TouchableOpacity>
  );
};
export default ScreenHeaderBtn;
