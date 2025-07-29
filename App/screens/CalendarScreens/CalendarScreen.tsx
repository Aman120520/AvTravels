import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CalendarStackParamList } from "../../helper/navigationTypes";
import Images from "../../resources/Images";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

// Mock Data
const scheduleData = [
  {
    id: "1",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    date: "26 January 2022",
    image: Images.posts.eleven,
  },
  {
    id: "2",
    name: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2022",
    image: Images.posts.ten,
  },
  {
    id: "3",
    name: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2022",
    image: Images.posts.nine,
  },
  {
    id: "4",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    date: "26 January 2022",
    image: Images.posts.eleven,
  },
  {
    id: "5",
    name: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2022",
    image: Images.posts.ten,
  },
  {
    id: "6",
    name: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2022",
    image: Images.posts.nine,
  },
  {
    id: "7",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    date: "26 January 2022",
    image: Images.posts.eleven,
  },
  {
    id: "8",
    name: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2022",
    image: Images.posts.ten,
  },
  {
    id: "9",
    name: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2022",
    image: Images.posts.nine,
  },
  {
    id: "10",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    date: "26 January 2022",
    image: Images.posts.eleven,
  },
  {
    id: "11",
    name: "High Rech Park",
    location: "Zeero Point, Sylhet",
    date: "26 January 2022",
    image: Images.posts.ten,
  },
  {
    id: "12",
    name: "Darma Reservoir",
    location: "Darma, Kuningan",
    date: "26 January 2022",
    image: Images.posts.nine,
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
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-primary-light"
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 24,
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 999,
            }}
            className="bg-texinput p-3 rounded-full shadow-sm"
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          </TouchableOpacity>
          <Text className="text-lg font-inter-SemiBold color-secondary">
            Schedule
          </Text>
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 999,
            }}
            className="bg-texinput p-3 rounded-full shadow-sm"
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          </TouchableOpacity>
        </View>
        {/* Date Picker */}
        <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Inter-Bold",
              }}
              className="color-secondary"
            >
              22 October
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ padding: 8 }}>
                <Ionicons
                  name="chevron-back"
                  size={20}
                  color={theme === "dark" ? "#fff" : "#333"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme === "dark" ? "#fff" : "#333"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {dates.map((date, index) => (
              <TouchableOpacity
                key={date}
                onPress={() => setSelectedDate(date)}
                style={{
                  alignItems: "center",
                  padding: 12,
                  borderRadius: 16,
                  backgroundColor: selectedDate === date && "#0D6EFD",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter-Medium",
                  }}
                  className="color-secondary"
                >
                  {days[index]}
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 18,
                    fontFamily: "Inter-Bold",
                  }}
                  className="color-secondary"
                >
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* My Schedule List */}
        <View style={{ marginTop: 32 }}>
          <View
            style={{
              paddingHorizontal: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Inter-Bold",
              }}
              className="color-secondary"
            >
              My Schedule
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PopularPlacesScreen")}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter-Medium",
                }}
                className="color-secondary"
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>
          {scheduleData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors["--color-primary-light"],
                marginHorizontal: 24,
                marginBottom: 16,
                padding: 16,
                borderRadius: 18,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 80, height: 80, borderRadius: 16 }}
              />
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Inter-Bold",
                  }}
                  className="color-secondary"
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 4,
                  }}
                >
                  <Ionicons
                    name="calendar-outline"
                    size={16}
                    color={theme === "dark" ? "#fff" : "#333"}
                  />
                  <Text
                    style={{
                      fontSize: 14,

                      marginLeft: 8,
                    }}
                    className="color-secondary"
                  >
                    {item.date}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 4,
                  }}
                >
                  <Ionicons
                    name="location-outline"
                    size={16}
                    color={theme === "dark" ? "#fff" : "#333"}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 8,
                    }}
                    className="color-secondary"
                  >
                    {item.location}
                  </Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={theme === "dark" ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
