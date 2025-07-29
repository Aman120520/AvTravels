import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MessageStackParamList } from "../helper/navigationTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "../screens/MessageScreens/MessageScreen";
import ChatScreen from "../screens/MessageScreens/ChatScreen";

const Stack = createNativeStackNavigator<MessageStackParamList>();

const MessageNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default MessageNavigators;

const styles = StyleSheet.create({});
