import { StyleSheet, View } from "react-native";

import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import StartGame from "./src/screens/StartGame";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    "InstrumentSerif-Regular": require("./src/assets/fonts/InstrumentSerif-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "InstrumentSerif-Regular",
  },
});
