import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const contentWidth = AppTheme.screenWidth - 48;

const uploadFirstStepStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 12,
  },
  appBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancel: {
    color: AppTheme.colors.Secondary,
  },
  photoContainer: {
    marginTop: 32,
    width: "100%",
    height: contentWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: AppTheme.colors.Outline,
  },
  placeHolder: {
    width: 84,
    height: 84,
    marginBottom: 16,
  },
  sizeLimit: {
    color: AppTheme.colors.SecondaryText,
    marginTop: 8,
  },

  inputLabel: {
    marginTop: 24,
    marginBottom: 10,
  },
  descriptionContainer: {
    borderRadius: 8,
    height: 100,
  },
  descriptionInput: {
    textAlignVertical: "top",
    paddingTop: 16,
  },
  next: {
    marginTop: 40,
  },
});

export default uploadFirstStepStyles;
