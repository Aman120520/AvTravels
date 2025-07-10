import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarStackParamList } from "../helper/navigationTypes";
import CalendarScreen from "../screens/CalendarScreens/CalendarScreen";
import PopularPlacesScreen from "../screens/CalendarScreens/PopularPlacesScreen";

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
      {/* Add other screens here as needed */}
      <Stack.Screen
        name="PopularPlacesScreen"
        component={PopularPlacesScreen}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigators;

const styles = StyleSheet.create({});
