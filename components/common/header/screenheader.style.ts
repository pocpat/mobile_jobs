import { StyleSheet, ImageStyle, DimensionValue } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const btnImg = (dimension: DimensionValue): ImageStyle => ({
  width: dimension,
  height: dimension,
  resizeMode: "contain",
});

export default styles;