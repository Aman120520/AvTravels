import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Strings from "../../resources/Strings";

type Props = NativeStackScreenProps<
  AuthenticationStackParamList,
  "LoginScreen"
>;
const LoginScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flexgrow p-5" showsVerticalScrollIndicator={false}>
        <View className="items-start">
          <TouchableOpacity className="bg-light_gray p-3 rounded-full justify-center items-center">
            <Ionicons name="arrow-back" color={"black"} size={24} />
          </TouchableOpacity>
        </View>
        <Text className="self-center mt-20 font-inter-SemiBold color-black text-4xl">
          {Strings.login.title}
        </Text>
        <Text className="self-center mt-5 font-inter-Medium text-xl color-dark_gray">
          {Strings.login.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
