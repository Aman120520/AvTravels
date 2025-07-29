import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useApolloClient } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileStackParamList } from "../../helper/navigationTypes";
import { ThemeContext } from "../../Context/ThemeContext";

// --- Mock Data ---
const profileData = {
  name: "Leonardo",
  email: "leonardo@gmail.com",
  avatar: "https://i.pravatar.cc/150?u=leonardo",
  stats: [
    { label: "Reward Points", value: "360" },
    { label: "Travel Trips", value: "238" },
    { label: "Bucket List", value: "473" },
  ],
  menuItems: [
    { icon: "person-outline", label: "Profile" },
    { icon: "bookmark-outline", label: "Bookmarked" },
    { icon: "airplane-outline", label: "Previous Trips" },
    { icon: "settings-outline", label: "Settings" },
    { icon: "information-circle-outline", label: "Version" },
    { icon: "log-out-outline", label: "Logout" }, // Changed icon for clarity
  ],
};

// --- Define a broader navigation type for the reset action ---
type RootStackParamList = ProfileStackParamList & {
  LoginScreen: undefined;
};

type ProfileNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const client = useApolloClient(); // Get the Apollo Client instance
  const { theme, toggleTheme } = useContext(ThemeContext);

  // --- Logout Logic ---
  const handleLogout = async () => {
    try {
      // 1. First, reset navigation to get the user off protected screens.
      // This stops any active queries from trying to refetch.
      navigation.reset({
        index: 0,
        routes: [{ name: "SplashScreen" }],
      });

      // 2. Then, remove the token from storage.
      await AsyncStorage.removeItem("auth-token");

      // 3. Finally, clear the Apollo cache.
      // Use clearStore() for a clean wipe without refetching.
      await client.clearStore();
    } catch (e) {
      console.error("Error during logout:", e);
      // This alert is now less likely to be seen by the user, but is good for debugging.
      Alert.alert(
        "Logout Failed",
        "An error occurred during the logout process."
      );
    }
  };

  return (
    <SafeAreaView className={`flex-1 bg-primary-light`} edges={["top"]}>
      {/* Header */}
      <View className="px-6 mt-2 flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-texinput p-3 rounded-full shadow-sm"
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme === "dark" ? "#fff" : "#333"}
          />
        </TouchableOpacity>
        <Text className="text-lg font-inter-SemiBold color-secondary">
          Profile
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={toggleTheme}
            className="bg-texinput p-3 rounded-full shadow-sm mr-2"
          >
            <Ionicons
              name={theme === "dark" ? "sunny-outline" : "moon-outline"}
              size={22}
              color={theme === "dark" ? "#FFD700" : "#333"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfileScreen")}
            className="bg-texinput p-3 rounded-full shadow-sm"
          >
            <Ionicons
              name="create-outline"
              size={24}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Profile Info */}
        <View className="items-center mt-8">
          <Image
            source={{ uri: profileData.avatar }}
            className="w-24 h-24 rounded-full"
          />
          <Text className="text-2xl font-inter-Bold color-secondary mt-4">
            {profileData.name}
          </Text>
          <Text className="text-base text-gray-500 dark:text-gray-300 mt-1">
            {profileData.email}
          </Text>
        </View>

        {/* Stats Card */}
        <View className="bg-texinput mx-6 mt-6 p-4 rounded-2xl flex-row justify-around shadow-sm">
          {profileData.stats.map((stat) => (
            <View key={stat.label} className="items-center">
              <Text className="text-gray-500 dark:text-gray-300 text-sm">
                {stat.label}
              </Text>
              <Text className="text-blue-500 dark:text-blue-400 text-xl font-inter-Bold mt-1">
                {stat.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Menu List */}
        <View className="bg-texinput mx-6 mt-6 rounded-2xl shadow-sm">
          {profileData.menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              // --- Attach onPress handler to the Logout button ---
              onPress={() => {
                if (item.label === "Logout") {
                  handleLogout();
                }
                // You can add other navigation actions here for other items
              }}
              className={`flex-row items-center p-5 `}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={
                  item.label === "Logout"
                    ? "red"
                    : theme === "dark"
                    ? "#bbb"
                    : "gray"
                }
              />
              <Text
                className={`flex-1 ml-4 text-base font-inter-Medium ${
                  item.label === "Logout" ? "text-red-500" : "color-secondary"
                }`}
              >
                {item.label}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={theme === "dark" ? "#bbb" : "lightgray"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
