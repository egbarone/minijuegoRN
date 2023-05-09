import { Text, View } from "react-native";

import React from "react";
import styles from "./styles";

const Header = ({ title, newStyles }) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...newStyles }}>{title}</Text>
    </View>
  );
};

export default Header;
