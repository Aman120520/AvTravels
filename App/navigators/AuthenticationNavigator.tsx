import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../helper/navigationTypes";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignupScreen from "../screens/authentication/SignupScreen";
import ForgotPasswordScreen from "../screens/authentication/ForgotPasswordScreen";
import BottomTabNavigators from "./BottomTabNavigators";

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();
const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        headerShown: false,
      }}
    >
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
      <Stack.Screen
        name={"ForgotPasswordScreen"}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={"BottomTabNavigator"}
        component={BottomTabNavigators}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;

const styles = StyleSheet.create({});
