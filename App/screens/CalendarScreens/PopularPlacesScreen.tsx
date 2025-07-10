import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Images from "../../resources/Images";

// Mock Data
const popularPlaces = [
  {
    id: "1",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "2",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "3",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "4",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
];

const PopularPlaceCard = ({ item }: { item: (typeof popularPlaces)[0] }) => (
  <View className="w-1/2 p-2">
    <View className="bg-white rounded-2xl shadow-sm">
      <Image source={item.image} className="w-full h-40 rounded-t-2xl" />
      <TouchableOpacity className="absolute top-3 right-3 bg-white/60 p-2 rounded-full">
        <Ionicons name="heart" size={16} color="white" />
      </TouchableOpacity>
      <View className="p-3">
        <Text
          className="text-base font-inter-Bold text-slate-800"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-sharp" size={14} color="gray" />
          <Text className="text-xs text-gray-500 ml-1" numberOfLines={1}>
            {item.location}
          </Text>
        </View>
        <View className="flex-row items-center mt-2">
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text className="text-xs font-inter-SemiBold text-gray-700 ml-1">
            {item.rating}
          </Text>
        </View>
        <Text className="text-lg font-inter-Bold text-cyan-500 mt-2">
          ${item.price}/
          <Text className="text-sm font-inter-Regular text-gray-500">
            Person
          </Text>
        </Text>
      </View>
    </View>
  </View>
);

const PopularPlacesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* Header */}
      <View className="px-6 mt-2 flex-row items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-100 p-3 rounded-full"
        >
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-inter-SemiBold text-gray-800 -ml-6">
          Popular Places
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="mt-8 px-4">
          <Text className="text-2xl font-inter-Bold text-slate-800 mb-4">
            All Popular Places
          </Text>
          <View className="flex-row flex-wrap">
            {popularPlaces.map((item) => (
              <PopularPlaceCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PopularPlacesScreen;
