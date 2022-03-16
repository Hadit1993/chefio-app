import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const signinStyles = StyleSheet.create({
  scrollview: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 107,
  },
  description: {
    color: AppTheme.colors.SecondaryText,
    width: "100%",
    textAlign: "center",
    marginTop: 8,
  },
  emailInputContainer: {
    marginTop: 32,
  },

  passInputContainer: {
    marginTop: 16,
  },
  forgotPassword: {
    color: AppTheme.colors.MainText,
    marginTop: 24,
    alignSelf: "flex-end",
  },

  login: {
    marginTop: 72,
  },
  continueWith: {
    width: "100%",
    textAlign: "center",
    marginVertical: 24,
    color: AppTheme.colors.SecondaryText,
  },
  google: {
    backgroundColor: "#FF5842",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },

  dontYou: {
    color: AppTheme.colors.MainText,
    marginRight: 8,
  },

  signup: {
    color: AppTheme.colors.Primary,
  },
});

export default signinStyles;
