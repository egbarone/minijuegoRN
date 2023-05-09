import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 90,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
  },
});

export default styles;
