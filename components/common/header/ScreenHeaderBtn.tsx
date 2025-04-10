import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from "react-native";
import styles, { btnImg } from "./screenheader.style";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue; // Use DimensionValue for width/height
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
        style={btnImg(dimension)} // Call the function to resolve the style
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;