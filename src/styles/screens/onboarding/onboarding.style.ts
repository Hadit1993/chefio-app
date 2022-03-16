import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const onBoardingStyles = StyleSheet.create({
  image: {
    width: "100%",
  },

  title: {
    marginTop: 48,
    width: "100%",
    textAlign: "center",
  },
  description: {
    width: "100%",
    textAlign: "center",
    color: AppTheme.colors.SecondaryText,
    marginTop: 16,
  },
  button: {
    position: "absolute",
    width: AppTheme.screenWidth - 48,
    marginLeft: 24,
    bottom: 30,
  },
});

export default onBoardingStyles;
