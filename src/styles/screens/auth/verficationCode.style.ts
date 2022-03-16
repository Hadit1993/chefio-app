import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const verificationCodeStyles = StyleSheet.create({
  inputRow: {
    marginTop: 32,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  inputContainer: {
    width: 72,
    height: 72,
    borderRadius: 20,
    padding: 0,
    paddingHorizontal: 0,
  },
  input: {
    fontSize: 34,
    fontFamily: AppTheme.getFont("Inter-Medium"),
    color: AppTheme.colors.MainText,
    textAlign: "center",
    lineHeight: 41,
    width: "100%",
    padding: 0,
  },

  timerLabel: {
    width: "100%",
    textAlign: "center",
    marginTop: 48,
  },

  timer: {
    color: AppTheme.colors.Secondary,
  },
  verify: {
    marginTop: 24,
  },
  sendAgain: {
    marginTop: 16,
  },
});

export default verificationCodeStyles;
