import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const textFieldStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 32,
    flexDirection: "row",
    paddingHorizontal: 24,
    alignItems: "center",
  },

  textInput: {
    height: "100%",
    textAlignVertical: "center",
    flex: 1,
    fontFamily: AppTheme.getFont("Inter-Medium"),
    fontSize: 15,
    lineHeight: 18.5,
    letterSpacing: 0.7,
    color: AppTheme.colors.MainText,
  },

  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  rightIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },

  error: {
    color: "red",
    marginLeft: 20,
    marginTop: 2,
  },
});

export default textFieldStyles;
