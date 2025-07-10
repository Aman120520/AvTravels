import { StyleSheet } from "react-native";
import React from "react";
import { HomeStackParamList } from "../helper/navigationTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import DetailsScreen from "../screens/HomeScreens/DetailsScreen";
import MapScreen from "../screens/HomeScreens/MapScreen";

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
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigators;

const styles = StyleSheet.create({});
