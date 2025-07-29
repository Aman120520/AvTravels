import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { GET_HOME_PAGE_DATA } from "../../graphql/queries";
import { ThemeContext } from "../../Context/ThemeContext";

// --- NEW Type Definitions (Matching our API) ---
type User = {
  id: string;
  username: string;
  avatar: string;
};

type Category = {
  id: string;
  name: string;
};

type Destination = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
};

type Package = {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  price: number;
  duration: string;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "HomeScreen"
>;

const iconMap: { [key: string]: keyof typeof Ionicons.glyphMap } = {
  All: "grid-outline",
  Beach: "water-outline",
  Mountain: "trail-sign-outline",
  Forest: "leaf-outline",
  City: "business-outline",
};

// --- REUSABLE COMPONENTS ---

const DestinationCard: React.FC<{ item: Destination }> = ({ item }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      className="mr-4 bg-white p-3 rounded-2xl shadow-sm"
      onPress={() => navigation.navigate("Details", { destinationId: item.id })}
    >
      <Image
        source={{ uri: item.imageUrl }}
        className="w-48 h-48 rounded-xl bg-gray-200"
        resizeMode="cover"
      />
      <Text
        className="text-lg font-inter-SemiBold text-slate-800 mt-3"
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <View className="flex-row items-center justify-between mt-1">
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={16} color="#888" />
          <Text
            className="text-sm text-gray-600 ml-1 font-inter-Regular"
            numberOfLines={1}
          >
            {item.location}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text className="text-sm font-inter-SemiBold text-gray-700 ml-1">
            {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PackageCard: React.FC<{ item: Package }> = ({ item }) => (
  <TouchableOpacity className="flex-row items-center bg-white p-3 rounded-2xl mb-4 shadow-sm">
    <Image
      source={{ uri: item.imageUrl }}
      className="w-24 h-24 rounded-xl bg-gray-200"
    />
    <View className="flex-1 ml-4">
      <Text className="text-lg font-inter-Bold text-slate-800">
        {item.name}
      </Text>
      <View className="flex-row items-center mt-1">
        <Ionicons name="location-outline" size={16} color="#888" />
        <Text className="text-sm text-gray-600 ml-1">{item.location}</Text>
      </View>
      <Text className="text-lg font-inter-Bold text-blue-500 mt-2">
        ${item.price}
        <Text className="text-sm font-inter-Regular text-gray-500">
          {" "}
          / {item.duration}
        </Text>
      </Text>
    </View>
  </TouchableOpacity>
);

// --- MAIN HOME SCREEN COMPONENT ---
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA);
  const { theme } = useContext(ThemeContext);

  if (loading) {
    return (
      <SafeAreaView
        className={`flex-1 justify-center items-center bg-gray-50 dark:bg-dark`}
      >
        <ActivityIndicator size="large" color="#3498db" />
      </SafeAreaView>
    );
  }

  if (!data || !data.getHomePageData) {
    return (
      <SafeAreaView
        className={`flex-1 justify-center items-center p-5 bg-gray-50 dark:bg-dark`}
      >
        <Text className="text-slate-800 dark:text-white">
          No data available.
        </Text>
      </SafeAreaView>
    );
  }

  // Destructure data from the API response
  const { me, categories, topDestinations, exclusivePackages } =
    data.getHomePageData;

  return (
    <SafeAreaView className={`flex-1 bg-gray-50 dark:bg-dark`} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="px-6 mt-4 flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-inter-Bold text-slate-800 dark:text-white">
              Explore the
            </Text>
            <Text className="text-3xl font-inter-Bold text-blue-500 dark:text-blue-400">
              Beautiful world
            </Text>
          </View>
          <Image
            source={{ uri: me?.avatar || "https://i.pravatar.cc/150" }}
            className="w-12 h-12 rounded-full"
          />
        </View>

        {/* Categories Section */}
        <View className="mt-8">
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item.name)}
                className={`items-center mr-6 p-3 rounded-xl ${
                  selectedCategory === item.name
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-white dark:bg-slate-800"
                }`}
              >
                <Ionicons
                  name={iconMap[item.name] || "help-outline"}
                  size={28}
                  color={
                    selectedCategory === item.name
                      ? "white"
                      : theme === "dark"
                      ? "#bbb"
                      : "gray"
                  }
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
          />
        </View>

        {/* Top Destination Section */}
        <View className="mt-8">
          <Text className="text-2xl font-inter-Bold text-slate-800 dark:text-white px-6 mb-4">
            Top Destinations
          </Text>
          <FlatList
            data={topDestinations}
            renderItem={({ item }) => <DestinationCard item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
          />
        </View>

        {/* Exclusive Packages Section */}
        <View className="mt-8 px-6">
          <Text className="text-2xl font-inter-Bold text-slate-800 dark:text-white mb-4">
            Exclusive Packages
          </Text>
          {exclusivePackages.map((item: Package) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
