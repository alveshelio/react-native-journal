import React from "react";
import { View, Text, StyleSheet } from "react-native";
import navigationStyles from "../styles/navigation";

const Journal = () => (
  <View style={styles.container}>
    <Text>Journal Screen</Text>
  </View>
);

Journal.navigationOptions = ({ navigation }) => ({
  params: navigation.params || {},
  ...navigationStyles
});

export default Journal;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
