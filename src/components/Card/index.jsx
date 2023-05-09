import { Text, View } from "react-native";

import React from "react";
import styles from "./styles";

const Card = ({ children, otherStyles }) => {
  return (
    <View style={{ ...styles.container, ...otherStyles }}>{children}</View>
  );
};

export default Card;
