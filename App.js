import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/screens/Home";
import Journal from "./src/screens/Journal";

const navigator = createStackNavigator(
  {
    Home,
    Journal
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      title: "Home"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createAppContainer(navigator);
