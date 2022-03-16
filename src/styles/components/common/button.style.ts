import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const buttonStyles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    color: "white",
    fontFamily: AppTheme.getFont("Inter-Bold"),
    fontSize: 15,
    lineHeight: 18.15,
    letterSpacing: 0.7,
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default buttonStyles;
