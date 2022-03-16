import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const signupStyles = StyleSheet.create({
  passRulesTitle: {
    color: AppTheme.colors.MainText,
    marginTop: 24,
  },
  passRulesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  checkIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  inactiveRule: {
    color: "#9FA5C0",
  },
  signup: {
    marginVertical: 23,
  },
});

export default signupStyles;
