import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Strings from "../../resources/Strings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../../Context/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
const SplashScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    // This function will run once when the splash screen loads
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth-token");

        // Use replace to prevent the user from navigating back to the splash screen
        if (token) {
          navigation.reset({
            index: 0,
            routes: [{ name: "BottomTabNavigator" }],
          });
        } else {
          navigation.replace("AuthenticationNavigator");
        }
      } catch (e) {
        console.error("Error checking auth status", e);
        navigation.replace("AuthenticationNavigator"); // Default to login on error
      }
    };

    // Add a small delay to ensure the splash screen is visible for a moment
    const timer = setTimeout(() => {
      checkAuthStatus();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-primary">
      <StatusBar style="auto" />
      <Text className="font-inter-ExtraBold text-4xl color-white">
        {Strings.splash.title}
      </Text>

      <TouchableOpacity
        onPress={toggleTheme}
        className="px-4 py-2 bg-primary rounded-xl"
      >
        <Text className="text-white font-inter-Medium">
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
