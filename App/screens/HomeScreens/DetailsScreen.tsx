import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../resources/Images";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../helper/navigationTypes";

// Mock Data - In a real app, you would get this from navigation params
const details = {
  name: "Niladri Reservoir",
  location: "Tekergat, Sunamgnj",
  rating: 4.7,
  reviews: 2498,
  price: 59,
  image: Images.posts.eleven, // Replace with actual image URL or import
  about:
    "You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation. Have you ever been on holiday to the Greek Etc...",
  facilities: [
    { icon: "wifi", name: "Wifi" },
    { icon: "restaurant", name: "Food" },
    { icon: "bed", name: "Hotel" },
    { icon: "airplane", name: "Flight" },
    { icon: "location", name: "Pick-up" },
  ],
};
type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Details"
>;

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {/* Background Image Header */}
        <View className="relative">
          <Image source={details.image} className="w-full h-96" />
          <SafeAreaView className="absolute top-0 left-0 right-0 flex-row justify-between items-center px-6">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="bg-white/70 p-3 rounded-full"
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-lg font-inter-SemiBold text-slate-800">
              Details
            </Text>
            <TouchableOpacity className="bg-white/70 p-3 rounded-full">
              <Ionicons name="bookmark-outline" size={24} color="black" />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Content Card */}
        <View className="p-6 -mt-10 bg-white rounded-t-3xl">
          <Text className="text-3xl font-inter-Bold text-slate-800">
            {details.name}
          </Text>
          <View className="flex-row items-center mt-2">
            <Ionicons name="location-sharp" size={18} color="#888" />
            <Text className="text-base text-gray-600 ml-1 font-inter-Regular">
              {details.location}
            </Text>
          </View>

          {/* Info Row */}
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-row items-center">
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text className="text-base font-inter-Bold text-slate-700 ml-1">
                {details.rating}
              </Text>
              <Text className="text-base text-gray-500 ml-1 font-inter-Regular">
                ({details.reviews} Reviews)
              </Text>
            </View>
            <Text className="text-2xl font-inter-Bold text-cyan-500">
              ${details.price}/
              <Text className="text-base font-inter-Regular text-gray-600">
                Person
              </Text>
            </Text>
          </View>

          {/* Facilities Icons */}
          <View className="flex-row justify-around mt-6">
            {details.facilities.map((facility) => (
              <View key={facility.name} className="items-center">
                <View className="bg-cyan-50 p-4 rounded-full">
                  <Ionicons
                    name={facility.icon as any}
                    size={24}
                    color="rgb(6 182 212)"
                  />
                </View>
                <Text className="mt-2 text-xs text-gray-600 font-inter-Medium">
                  {facility.name}
                </Text>
              </View>
            ))}
          </View>

          {/* About Section */}
          <Text className="text-xl font-inter-Bold text-slate-800 mt-6">
            About Destination
          </Text>
          <Text className="text-base text-gray-600 mt-2 leading-6 font-inter-Regular">
            {details.about}
            <Text className="text-cyan-500 font-inter-SemiBold">
              {" "}
              Read More
            </Text>
          </Text>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <SafeAreaView className="px-6 py-2 bg-white" edges={["bottom"]}>
        <TouchableOpacity
          className="bg-blue-600 w-full py-4 rounded-full"
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text className="text-white text-lg font-inter-Bold text-center">
            Book Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;
