import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Strings from "../../resources/Strings";

type Props = NativeStackScreenProps<RootStackParamList, "SplashScreen">;
const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AuthenticationNavigator");
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-primary">
      <StatusBar style="light" />
      <Text className="font-inter-ExtraBold text-4xl color-white">
        {Strings.splash.title}
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
