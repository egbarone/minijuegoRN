import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});

export default styles;
