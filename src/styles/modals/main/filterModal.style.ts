import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const buttonWidth = (AppTheme.screenWidth - 48 - 15) / 2;

const filterModalStyles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 37,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: 15,
  },
  cookingDuration: {
    marginTop: 32,
  },

  inMinutes: {
    color: AppTheme.colors.SecondaryText,
  },

  sliderContainer: {
    marginTop: 16,
  },
  trackStyle: {
    height: 8,
    backgroundColor: AppTheme.colors.form,
    borderRadius: 32,
  },
  thumbStyle: {
    width: 24,
    height: 24,
    backgroundColor: AppTheme.colors.Primary,
    borderRadius: 12,
  },
  durationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  durationLabel: {
    fontFamily: AppTheme.getFont("Inter-Bold"),
    fontSize: 15,
    lineHeight: 18.15,
    letterSpacing: 0.7,
  },

  buttonRow: {
    marginTop: 52,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: buttonWidth,
  },
});

export default filterModalStyles;
