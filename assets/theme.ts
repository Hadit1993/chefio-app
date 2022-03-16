import { Dimensions, StyleSheet } from "react-native";

type FontFamily =
  | "Inter-Black"
  | "Inter-Bold"
  | "Inter-ExtraBold"
  | "Inter-ExtraLight"
  | "Inter-Light"
  | "Inter-Medium"
  | "Inter-Regular"
  | "Inter-SemiBold"
  | "Inter-Thin";

const getFont = (fontFamily: FontFamily) => fontFamily;

const colors = {
  Primary: "#1FCC79",
  Secondary: "#FF6464",
  MainText: "#2E3E5C",
  SecondaryText: "#9FA5C0",
  Outline: "#D0DBEA",
  form: "#F4F5F7",
  background: "#E5E5E5",
};

const textStyles = StyleSheet.create({
  H1: {
    fontFamily: getFont("Inter-Bold"),
    fontSize: 22,
    lineHeight: 32,
    letterSpacing: 0.5,
    color: colors.MainText,
  },
  H2: {
    fontFamily: getFont("Inter-Bold"),
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: colors.MainText,
  },
  H3: {
    fontFamily: getFont("Inter-Bold"),
    fontSize: 15,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: colors.MainText,
  },
  P1: {
    fontFamily: getFont("Inter-Medium"),
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: colors.MainText,
  },

  P2: {
    fontFamily: getFont("Inter-Medium"),
    fontSize: 15,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: colors.MainText,
  },

  S: {
    fontFamily: getFont("Inter-Medium"),
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5,
    color: colors.MainText,
  },
});

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AppTheme = {
  colors,
  textStyles,
  getFont,
  screenWidth,
  screenHeight,
};

export default AppTheme;
