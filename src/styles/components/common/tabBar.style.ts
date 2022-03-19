import { StyleSheet } from "react-native";
import AppTheme from "../../../../assets/theme";

const tabBarStyles = StyleSheet.create({
  icon: { width: 24, height: 24 },
  tabBar: {
    height: 82,
  },
  label: {
    fontFamily: AppTheme.getFont("Inter-Medium"),
    fontSize: 12,
    lineHeight: 14.52,
    letterSpacing: 0.7,
    textAlign: "center",
    marginTop: 8,
  },

  tabBarItem: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ScanButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: AppTheme.colors.Primary,
    justifyContent: "center",
    alignItems: "center",
  },
  scanContainer: {
    position: "absolute",
    alignItems: "center",
    top: -28,
  },
});

export default tabBarStyles;
