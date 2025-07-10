import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Strings from "../../resources/Strings";
import { StatusBar } from "expo-status-bar";
import Textinput from "../../components/Textinput";
import PrimaryButton from "../../components/PrimaryButton";

type Props = NativeStackScreenProps<
  AuthenticationStackParamList,
  "ForgotPasswordScreen"
>;

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");

  const [emailError, setEmailError] = useState<string | null>(null);

  const emailRef = useRef<TextInput>(null);

  return (
    <SafeAreaView className="flex-1 bg-primary-light">
      <StatusBar style="auto" />
      <ScrollView className="flexgrow p-5" showsVerticalScrollIndicator={false}>
        <View className="items-start">
          <TouchableOpacity
            className="bg-light_gray p-3 rounded-full justify-center items-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" color={"black"} size={24} />
          </TouchableOpacity>
        </View>
        <Text className="self-center mt-20 font-inter-SemiBold color-secondary text-4xl">
          {Strings.forgotPassword.title}
        </Text>
        <Text className="self-center mt-5 font-inter-Regular text-l text-center color-secondary-light">
          {Strings.forgotPassword.description}
        </Text>
        <View className="flex-1 justify-center items-center px-2 py-5">
          <Textinput
            placeholder="Enter your email-address"
            value={email}
            error={emailError}
            refs={emailRef}
            onChangeText={(text) => {
              setEmail(text);
              if (!text.includes("@")) {
                setEmailError("Please enter a valid email address");
              } else {
                setEmailError(null);
              }
            }}
          />

          <PrimaryButton
            name={Strings.forgotPassword.resetPassword}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
