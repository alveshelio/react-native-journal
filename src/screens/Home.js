import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import navigationStyles from "../styles/navigation";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go To Journal"
      onPress={() => navigation.navigate("Journal")}
    />
  </View>
);

Home.navigationOptions = ({ navigation }) => ({
  ...navigationStyles
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
