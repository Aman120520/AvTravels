import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../helper/navigationTypes";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignupScreen from "../screens/authentication/SignupScreen";

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();
const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;

const styles = StyleSheet.create({});
