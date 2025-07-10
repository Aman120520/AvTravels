import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarStackParamList } from "../helper/navigationTypes";
import CalendarScreen from "../screens/CalendarScreens/CalendarScreen";

const Stack = createNativeStackNavigator<CalendarStackParamList>();

const CalendarNavigators = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default CalendarNavigators;

const styles = StyleSheet.create({});
