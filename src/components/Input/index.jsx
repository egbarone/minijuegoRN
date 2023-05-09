import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const Input = ({ newStyle, ...restProps }) => {
  return <TextInput style={{ ...styles.input, ...newStyle }} {...restProps} />;
};

export default Input;
