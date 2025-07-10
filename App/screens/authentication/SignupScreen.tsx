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
  "SignupScreen"
>;

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

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
          {Strings.signup.title}
        </Text>
        <Text className="self-center mt-5 font-inter-Regular text-l color-secondary-light">
          {Strings.signup.description}
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
            onSubmitEditing={() => {
              if (emailError) {
                passwordRef.current?.focus();
              } else {
                passwordRef.current?.focus();
              }
            }}
          />
          <Textinput
            placeholder="Enter your password"
            value={password}
            error={passwordError}
            secureTextEntry={true}
            refs={passwordRef}
            onChangeText={(text) => {
              setPassword(text);
              if (text.length < 6) {
                setPasswordError("Password must be at least 6 characters");
              } else {
                setPasswordError(null);
              }
            }}
            onSubmitEditing={() => {
              if (emailError || passwordError) {
                emailRef.current?.focus();
              } else {
                // Handle login logic here
                console.log("Logging in with", { email, password });
              }
            }}
          />
          <Textinput
            placeholder="Enter your re-password"
            value={confirmPassword}
            error={confirmPasswordError}
            secureTextEntry={true}
            refs={confirmPasswordRef}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (text.length < 6) {
                setConfirmPasswordError(
                  "Password must be at least 6 characters"
                );
              } else {
                setConfirmPasswordError(null);
              }
            }}
            onSubmitEditing={() => {
              if (emailError || passwordError || confirmPasswordError) {
                emailRef.current?.focus();
              } else {
                // Handle login logic here
                console.log("Logging in with", { email, password });
              }
            }}
          />

          <PrimaryButton name={Strings.signup.signUp} />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="self-center font-inter-Regular text-l color-secondary-light">
            {Strings.signup.already_have_an_account}
            <Text className="color-primary font-inter-Medium">
              {" "}
              {Strings.signup.signIn}
            </Text>
          </Text>
        </TouchableOpacity>
        <Text className="self-center font-inter-Regular text-l mt-4 color-secondary-light">
          {Strings.signup.orConnect}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
