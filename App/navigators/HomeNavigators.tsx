import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeStackParamList } from "../helper/navigationTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreens/HomeScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigators;

const styles = StyleSheet.create({});
