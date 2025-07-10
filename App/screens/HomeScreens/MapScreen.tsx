import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock Data
const mapDetails = {
  name: "Niladri Reservoir",
  rating: 4.7,
  time: "45 Minutes",
  image:
    "https://images.unsplash.com/photo-1588622146908-a9141f26933c?q=80&w=1887&auto=format&fit=crop",
  avatars: [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
  ],
  locations: [
    {
      name: "La-Hotel",
      distance: "2.09 mi",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      top: "25%",
      left: "55%",
    },
    {
      name: "Lemon Garden",
      distance: "2.09 mi",
      image:
        "https://images.unsplash.com/photo-1444124818704-4d89a4a2e874?q=80&w=1887",
      top: "50%",
      left: "30%",
    },
  ],
};

const MapScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-300">
      {/* Background Map Placeholder */}
      <Image
        source={{ uri: "https://i.stack.imgur.com/7bI1Y.jpg" }} // Using a generic map image as a placeholder
        className="absolute w-full h-full"
      />

      {/* Header */}
      <SafeAreaView className="absolute top-0 left-0 right-0 flex-row items-center px-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white/70 p-3 rounded-full"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-inter-SemiBold text-slate-800 -ml-6">
          View
        </Text>
      </SafeAreaView>

      {/* Map Markers */}
      {mapDetails.locations.map((loc) => (
        <View
          key={loc.name}
          style={{ position: "absolute", top: loc.top, left: loc.left }}
        >
          <View className="bg-white p-2 rounded-lg flex-row items-center shadow-lg">
            <Image
              source={{ uri: loc.image }}
              className="w-10 h-10 rounded-md"
            />
            <View className="ml-2">
              <Text className="font-inter-Bold text-slate-800">{loc.name}</Text>
              <Text className="text-xs text-gray-500">{loc.distance}</Text>
            </View>
          </View>
          {/* Triangle Pointer */}
          <View className="w-0 h-0 bg-transparent border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white self-center" />
        </View>
      ))}

      {/* Bottom Details Card */}
      <SafeAreaView
        className="absolute bottom-0 left-0 right-0"
        edges={["bottom"]}
      >
        <View className="bg-white m-4 p-5 rounded-2xl shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={{ uri: mapDetails.image }}
              className="w-16 h-16 rounded-xl"
            />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-inter-Bold text-slate-800">
                {mapDetails.name}
              </Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text className="text-sm font-semibold text-gray-700 ml-1">
                  {mapDetails.rating}
                </Text>
                <View className="flex-row ml-4">
                  {mapDetails.avatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={{ uri: avatar }}
                      className="w-6 h-6 rounded-full border border-white"
                      style={{ marginLeft: index > 0 ? -8 : 0 }}
                    />
                  ))}
                </View>
                <Text className="text-xs text-gray-500 font-medium ml-1">
                  +50
                </Text>
              </View>
            </View>
          </View>
          <View className="border-t border-gray-200 my-4" />
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons name="time-outline" size={20} color="gray" />
              <Text className="ml-2 text-base text-gray-600">
                {mapDetails.time}
              </Text>
            </View>
            <TouchableOpacity className="bg-blue-600 px-8 py-3 rounded-full">
              <Text className="text-white font-inter-Bold">See On The Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapScreen;
