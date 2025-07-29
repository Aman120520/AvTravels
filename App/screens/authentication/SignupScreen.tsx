import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Strings from "../../resources/Strings";
import { StatusBar } from "expo-status-bar";
import Textinput from "../../components/Textinput";
import PrimaryButton from "../../components/PrimaryButton";
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SIGN_UP_MUTATION } from "../../graphql/mutations"; // Make sure this mutation accepts a username!

type Props = NativeStackScreenProps<
  AuthenticationStackParamList,
  "SignupScreen"
>;

const SignUpScreen = ({ navigation }: Props) => {
  // --- State Management ---
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  // --- Error State ---
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  // --- Refs ---
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  // --- Apollo Mutation ---
  const [signUp, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: async (data) => {
      console.log("Sign up successful!", data);
      try {
        await AsyncStorage.setItem("auth-token", data.signUp.token);
        navigation.navigate("BottomTabNavigator");
      } catch (e) {
        console.error("Failed to save the auth token.", e);
        Alert.alert("Error", "Could not save authentication token.");
      }
    },
    onError: (apiError) => {
      Alert.alert("Sign Up Failed", apiError.message);
    },
  });

  // --- Improved Validation Logic ---
  const validateUsername = (text: string) => {
    setUsername(text);
    if (text.length < 3) {
      setUsernameError("Username must be at least 3 characters.");
    } else {
      setUsernameError(null);
    }
  };

  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError(null);
    }
    // Also re-validate the confirm password field
    if (confirmPassword) {
      validateConfirmPassword(confirmPassword, text);
    }
  };

  const validateConfirmPassword = (
    text: string,
    currentPassword = password
  ) => {
    setConfirmPassword(text);
    if (text !== currentPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  // --- Handle Submission ---
  const handleSignUp = () => {
    // Re-validate all fields before submitting
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      Alert.alert(
        "Validation Error",
        "Please fix the errors before submitting."
      );
      return;
    }

    signUp({
      variables: {
        username,
        email,
        password,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-light">
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          className="bg-light_gray p-3 rounded-full self-start"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" color={"black"} size={24} />
        </TouchableOpacity>

        <Text className="self-center mt-12 font-inter-SemiBold color-secondary text-4xl">
          {Strings.signup.title}
        </Text>
        <Text className="self-center mt-4 font-inter-Regular text-base color-secondary-light">
          {Strings.signup.description}
        </Text>

        <View className="mt-8">
          <Textinput
            placeholder="Enter your username"
            value={username}
            error={usernameError}
            refs={usernameRef}
            onChangeText={validateUsername}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <Textinput
            placeholder="Enter your email-address"
            value={email}
            error={emailError}
            refs={emailRef}
            onChangeText={validateEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Textinput
            placeholder="Enter your password"
            value={password}
            error={passwordError}
            secureTextEntry={!isPasswordVisible}
            refs={passwordRef}
            onChangeText={validatePassword}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            rightIcon={
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            }
          />
          <Textinput
            placeholder="Confirm your password"
            value={confirmPassword}
            error={confirmPasswordError}
            secureTextEntry={!isConfirmPasswordVisible}
            refs={confirmPasswordRef}
            onChangeText={validateConfirmPassword}
            returnKeyType="done"
            onSubmitEditing={handleSignUp}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                <Ionicons
                  name={isConfirmPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            }
          />

          <View className="mt-6">
            <PrimaryButton
              name={loading ? "Signing Up..." : Strings.signup.signUp}
              onPress={handleSignUp}
              disabled={loading}
            />
          </View>
        </View>

        <View className="flex-1 justify-end pb-4">
          <TouchableOpacity
            className="self-center mt-8"
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <Text className="font-inter-Regular text-base color-secondary-light">
              {Strings.signup.already_have_an_account}
              <Text className="color-primary font-inter-Medium">
                {" "}
                {Strings.signup.signIn}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
