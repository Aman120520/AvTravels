import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Strings from "../../resources/Strings";
import { ThemeContext } from "../../Context/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
const SplashScreen = ({ navigation }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AuthenticationNavigator");
    }, 2000);
  }, []);
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
