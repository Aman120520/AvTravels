import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  MessageStackParamList,
  ProfileStackParamList,
} from "../helper/navigationTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/MessageScreens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreens/ProfileScreen";
import EditProfileScreen from "../screens/ProfileScreens/EditProfileScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import SplashScreen from "../screens/authentication/SplashScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigators;

const styles = StyleSheet.create({});
