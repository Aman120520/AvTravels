import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CalendarStackParamList } from "../../helper/navigationTypes";

// Mock Data
const scheduleData = [
  {
    id: "1",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    date: "26 January 2022",
    image:
      "https://images.unsplash.com/photo-1588622146908-a9141f26933c?q=80&w=1887",
  },
  {
    id: "2",
    name: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2022",
    image:
      "https://images.unsplash.com/photo-1559587938-23517134a41d?q=80&w=1887",
  },
  {
    id: "3",
    name: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2022",
    image:
      "https://images.unsplash.com/photo-1518548419133-c1b471a11536?q=80&w=1887",
  },
];

const days = ["S", "M", "T", "W", "T", "F", "S"];
const dates = [18, 19, 20, 21, 22, 23, 24];

type ScheduleNavigationProp = NativeStackNavigationProp<
  CalendarStackParamList,
  "CalendarScreen"
>;

const CalendarScreen = () => {
  const navigation = useNavigation<ScheduleNavigationProp>();
  const [selectedDate, setSelectedDate] = useState(22);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="px-6 mt-2 flex-row justify-between items-center">
          <TouchableOpacity className="bg-gray-100 p-3 rounded-full">
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-lg font-inter-SemiBold text-gray-800">
            Schedule
          </Text>
          <TouchableOpacity className="bg-gray-100 p-3 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Date Picker */}
        <View className="mt-8 px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-inter-Bold text-slate-800">
              22 October
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="p-2">
                <Ionicons name="chevron-back" size={20} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity className="p-2">
                <Ionicons name="chevron-forward" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-around">
            {dates.map((date, index) => (
              <TouchableOpacity
                key={date}
                onPress={() => setSelectedDate(date)}
                className={`items-center p-3 rounded-2xl ${
                  selectedDate === date ? "bg-blue-500" : "bg-white"
                }`}
              >
                <Text
                  className={`font-inter-Medium ${
                    selectedDate === date ? "text-white" : "text-gray-400"
                  }`}
                >
                  {days[index]}
                </Text>
                <Text
                  className={`mt-2 text-lg font-inter-Bold ${
                    selectedDate === date ? "text-white" : "text-slate-800"
                  }`}
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* My Schedule List */}
        <View className="mt-8">
          <View className="px-6 flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-inter-Bold text-slate-800">
              My Schedule
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PopularPlacesScreen")}
            >
              <Text className="text-base font-inter-Medium text-blue-500">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {scheduleData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center bg-gray-50 mx-6 mb-4 p-4 rounded-2xl"
            >
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-xl"
              />
              <View className="flex-1 ml-4">
                <Text className="text-lg font-inter-Bold text-slate-800">
                  {item.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="calendar-outline" size={16} color="gray" />
                  <Text className="text-sm text-gray-500 ml-2">
                    {item.date}
                  </Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="location-outline" size={16} color="gray" />
                  <Text className="text-sm text-gray-500 ml-2">
                    {item.location}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="gray" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
