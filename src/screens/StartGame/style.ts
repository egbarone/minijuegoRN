import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: colors.primary,
  },
  subtitle: {
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  cleanButton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.disableColor,
    borderRadius: 10,
  },
  confirmButton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.actionColor,
    borderRadius: 10,
  },
  selectedCard: {
    marginTop: 50,
    width: "70%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
  },
});

export default styles;
