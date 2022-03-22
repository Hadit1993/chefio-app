import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const homeStyles = StyleSheet.create({
  filterSection: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  searchInputContainer: {
    backgroundColor: AppTheme.colors.form,
    borderWidth: 0,
    marginBottom: 24,
  },

  divider: {
    width: "100%",
    height: 8,
    backgroundColor: AppTheme.colors.form,
  },

  contentContainerStyle: {
    padding: 24,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
  itemSeparatorComponent: { height: 32 },
});

export default homeStyles;
