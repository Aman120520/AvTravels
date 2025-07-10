import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../helper/navigationTypes";
import HomeNavigators from "./HomeNavigators";
import CalendarNavigators from "./CalendarNavigators";
import MessageNavigators from "./MessageNavigators";
import ProfileNavigators from "./ProfileNavigators";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreens/HomeScreen";

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "white",
          width: width,
          height: height * 0.09,
          paddingTop: 10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          // tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.black,
          tabBarShowLabel: true,
          // tabBarLabelStyle: {
          //   fontFamily: AppFonts.medium,
          //   fontSize: TextFontSize.tabLabelText,
          //   bottom: ScaleSize.spacing_very_small,
          // },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            </>
          ),
        }}
        name="Home"
        component={HomeNavigators}
      />
      <Tab.Screen
        options={{
          // tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.black,
          tabBarShowLabel: true,
          // tabBarLabelStyle: {
          //   fontFamily: AppFonts.medium,
          //   fontSize: TextFontSize.tabLabelText,
          //   bottom: ScaleSize.spacing_very_small,
          // },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            </>
          ),
        }}
        name="Calendar"
        component={CalendarNavigators}
      />
      <Tab.Screen
        options={{
          // tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.black,
          tabBarShowLabel: true,
          // tabBarLabelStyle: {
          //   fontFamily: AppFonts.medium,
          //   fontSize: TextFontSize.tabLabelText,
          //   bottom: ScaleSize.spacing_very_small,
          // },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? "mail" : "mail-outline"}
                size={size}
                color={color}
              />
            </>
          ),
        }}
        name="Message"
        component={MessageNavigators}
      />
      <Tab.Screen
        options={{
          // tabBarActiveTintColor: Colors.primary,
          // tabBarInactiveTintColor: Colors.black,
          tabBarShowLabel: true,
          // tabBarLabelStyle: {
          //   fontFamily: AppFonts.medium,
          //   fontSize: TextFontSize.tabLabelText,
          //   bottom: ScaleSize.spacing_very_small,
          // },
          tabBarIcon: ({ focused, color, size }) => (
            <>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            </>
          ),
        }}
        name="Profile"
        component={ProfileNavigators}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigators;

const styles = StyleSheet.create({});
