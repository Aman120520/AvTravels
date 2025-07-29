import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../helper/navigationTypes";
import SplashScreen from "../screens/authentication/SplashScreen";
import AuthenticationNavigator from "./AuthenticationNavigator";
import BottomTabNavigators from "./BottomTabNavigators";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="AuthenticationNavigator"
        component={AuthenticationNavigator}
      />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigators} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
