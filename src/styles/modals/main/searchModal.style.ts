import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const searchModalStyles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInputContainer: {
    width: "auto",
    flex: 1,
    backgroundColor: AppTheme.colors.form,
    borderWidth: 0,
    marginHorizontal: 24,
  },
  scrolChild: {
    paddingVertical: 24,
  },
  history: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 24,
  },

  historyLabel: {
    flex: 1,
    marginHorizontal: 17,
  },
  searchSuggestion: {
    marginLeft: 24,
  },

  suggestionContainer: {
    marginTop: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
  },
  suggestionChip: {
    backgroundColor: AppTheme.colors.form,
    height: 48,
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 32,
    marginRight: 16,
    marginTop: 16,
  },
  suggestionLabel: {
    fontFamily: AppTheme.getFont("Inter-Medium"),
    fontSize: 15,
    lineHeight: 18.5,
    letterSpacing: 0.7,
    color: AppTheme.colors.MainText,
  },
});

export default searchModalStyles;
