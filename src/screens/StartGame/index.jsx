import {
  Button,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./style";

const StartGame = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInput = text => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => {
    setValue("");
    setConfirm(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (isNaN(newValue) || newValue <= 0 || newValue > 99) return;

    setConfirm(true);
    setSelectedNumber(newValue);
    setValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.subtitle}>Elija un Numero</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Your number"
            value={value}
            onChangeText={handleInput}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cleanButton}
              onPress={handleResetInput}
            >
              <Text style={styles.buttonText}>Clean</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmation}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirm && (
          <Card otherStyles={styles.selectedCard}>
            <Text style={{ color: "white" }}>Your number is:</Text>
            <Text>{selectedNumber}</Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => onStartGame(selectedNumber)}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
