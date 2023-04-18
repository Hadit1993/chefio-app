import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const uploadSecondStepStyles = StyleSheet.create({
  ingredients: {
    marginTop: 25,
    marginLeft: 24,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 24,
  },

  inputContainer: {
    flex: 1,
    marginLeft: 8,
  },
  swiperAction: {
    width: "100%",
    height: 56,
    justifyContent: "center",
  },

  lottieView: {
    width: 100,
  },

  addIngridientBtn: {
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 24,
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 32,
    borderColor: AppTheme.colors.Outline,
  },

  ingridientBtnTitle: {
    fontFamily: AppTheme.getFont("Inter-Medium"),
    fontSize: 15,
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: AppTheme.colors.MainText,
    marginLeft: 5,
  },
});

export default uploadSecondStepStyles;
