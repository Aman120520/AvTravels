import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../helper/navigationTypes"; // Adjust path if needed
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../resources/Images";
import { StatusBar } from "expo-status-bar";

// --- MOCK DATA (In a real app, this would come from props or a state management store) ---
const destinations = [
  {
    id: "1",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    image: Images.posts.eleven,
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
    ],
  },
  {
    id: "2",
    name: "Darma, Indonesia",
    location: "Kuningan, West Java",
    rating: 4.9,
    image: Images.posts.eight, // Replace with actual image URL or import
    avatars: [
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
    ],
  },
];

const categories = [
  { name: "Beach", icon: "water" },
  { name: "Mountain", icon: "trail-sign" },
  { name: "Forest", icon: "leaf" },
  { name: "City", icon: "business" },
  { name: "Desert", icon: "partly-sunny" },
];

// --- TYPE DEFINITIONS ---
type Destination = (typeof destinations)[0];
type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "HomeScreen"
>;

// --- REUSABLE COMPONENTS ---
const DestinationCard: React.FC<{ item: Destination }> = ({ item }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      className="mr-6"
      onPress={() => navigation.navigate("Details", { destinationId: item.id })}
    >
      <View className="relative">
        <Image
          source={item.image}
          className="w-64 h-80 rounded-xl"
          resizeMode="stretch"
        />
        <TouchableOpacity className="absolute top-4 right-4 bg-white/60 p-2.5 rounded-full">
          <Ionicons name="bookmark-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        <Text className="text-xl font-inter-Bold text-slate-800">
          {item.name}
        </Text>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center">
            <Ionicons name="location-sharp" size={18} color="#888" />
            <Text className="text-sm text-gray-600 ml-1 font-inter-Regular">
              {item.location}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text className="text-sm font-inter-SemiBold text-gray-700 ml-1">
              {item.rating}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center mt-3">
          <View className="flex-row">
            {item.avatars.map((avatar, index) => (
              <Image
                key={index}
                source={{ uri: avatar }}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{ marginLeft: index > 0 ? -12 : 0 }}
              />
            ))}
          </View>
          <Text className="text-sm text-gray-500 font-inter-Medium ml-2">
            +50
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// --- MAIN HOME SCREEN COMPONENT ---
const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFBFB]" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="px-6 mt-2 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?u=leonardo" }}
              className="w-12 h-12 rounded-full"
            />
            <Text className="text-lg font-inter-SemiBold text-gray-700 ml-3">
              Leonardo
            </Text>
          </View>
          <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="px-6">
          <Image
            source={Images.Home.title}
            resizeMode="contain"
            className="w-full "
          />
        </View>

        {/* Popular Categories Section */}
        <View>
          <Text className="text-2xl font-inter-Bold text-slate-800 px-6 mb-4">
            Popular Categories
          </Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity className="items-center mr-6">
                <View className="bg-cyan-50 p-4 rounded-full">
                  <Ionicons
                    name={item.icon as any}
                    size={24}
                    color="rgb(6 182 212)"
                  />
                </View>
                <Text className="mt-2 text-sm text-gray-700 font-inter-Medium">
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
          />
        </View>

        {/* Best Destination Section */}
        <View className="mt-8">
          <View className="px-6 flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-inter-Bold text-slate-800">
              Best Destination
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-inter-Medium text-blue-500">
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={destinations}
            renderItem={({ item }) => <DestinationCard item={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 24,
              paddingRight: 0,
              paddingVertical: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
