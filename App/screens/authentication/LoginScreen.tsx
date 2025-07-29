import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
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
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_MUTATION } from "../../graphql/mutations"; // Adjust this path to your mutations file

type Props = NativeStackScreenProps<
  AuthenticationStackParamList,
  "LoginScreen"
>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // --- Apollo Client Mutation Hook ---
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: async (data) => {
      // Make this function async
      console.log("Login successful!", data);
      try {
        // Use await to save the token
        await AsyncStorage.setItem("auth-token", data.login.token);

        navigation.navigate("BottomTabNavigator");
      } catch (e) {
        console.error("Failed to save the auth token.", e);
        Alert.alert("Error", "Could not save authentication token.");
      }
    },
    onError: (apiError) => {
      Alert.alert("Login Failed", apiError.message);
    },
  });
  // --- Form Validation ---
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
  };

  // --- Handle Login Submission ---
  const handleLogin = () => {
    // Re-validate fields before submission
    validateEmail(email);
    validatePassword(password);

    if (emailError || passwordError || !email || !password) {
      Alert.alert("Invalid Input", "Please check your email and password.");
      return;
    }

    // Call the login mutation
    login({
      variables: {
        email: email,
        password: password,
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

        <Text className="self-center mt-16 font-inter-SemiBold color-secondary text-4xl">
          {Strings.login.title}
        </Text>
        <Text className="self-center mt-4 font-inter-Regular text-base color-secondary-light">
          {Strings.login.description}
        </Text>

        <View className="mt-8">
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
            returnKeyType="done"
            onSubmitEditing={handleLogin}
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
        </View>

        <TouchableOpacity
          className="self-end my-2"
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text className="color-primary font-inter-Medium text-base">
            {Strings.login.forgotPassword}
          </Text>
        </TouchableOpacity>

        <View className="mt-4">
          <PrimaryButton
            name={loading ? "Signing In..." : Strings.login.signIn}
            onPress={handleLogin}
            disabled={loading}
          />
        </View>

        {/* API Error Display */}
        {error && !loading && (
          <Text className="text-red-500 text-center mt-2">{error.message}</Text>
        )}

        <View className="flex-1 justify-end pb-4">
          <TouchableOpacity
            className="self-center mt-8"
            onPress={() => navigation.navigate("SignupScreen")}
            disabled={loading}
          >
            <Text className="font-inter-Regular text-base color-secondary-light">
              {Strings.login.dont_have_an_account}
              <Text className="color-primary font-inter-Medium">
                {" "}
                {Strings.login.signUp}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
