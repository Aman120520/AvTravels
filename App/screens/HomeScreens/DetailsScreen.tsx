import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../resources/Images";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../helper/navigationTypes";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

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
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

  return (
    <View style={{ flex: 1, backgroundColor: colors["--color-light-default"] }}>
      <ScrollView>
        {/* Background Image Header */}
        <View style={{ position: "relative" }}>
          <Image
            source={details.image}
            style={{ width: "100%", height: 320 }}
          />
          <SafeAreaView
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: colors["--color-primary-light"] + "cc",
                padding: 12,
                borderRadius: 999,
              }}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={colors["--color-secondary-default"]}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Inter-SemiBold",
                color: colors["--color-secondary-default"],
              }}
            >
              Details
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors["--color-primary-light"] + "cc",
                padding: 12,
                borderRadius: 999,
              }}
            >
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={colors["--color-secondary-default"]}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        {/* Content Card */}
        <View
          style={{
            padding: 24,
            marginTop: -40,
            backgroundColor: colors["--color-primary-light"],
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Inter-Bold",
              color: colors["--color-secondary-default"],
            }}
          >
            {details.name}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Ionicons
              name="location-sharp"
              size={18}
              color={colors["--color-grey-default"]}
            />
            <Text
              style={{
                fontSize: 16,
                color: colors["--color-grey-default"],
                marginLeft: 4,
                fontFamily: "Inter-Regular",
              }}
            >
              {details.location}
            </Text>
          </View>
          {/* Info Row */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="star"
                size={20}
                color={colors["--color-accent-default"]}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter-Bold",
                  color: colors["--color-secondary-default"],
                  marginLeft: 4,
                }}
              >
                {details.rating}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: colors["--color-grey-default"],
                  marginLeft: 4,
                  fontFamily: "Inter-Regular",
                }}
              >
                ({details.reviews} Reviews)
              </Text>
            </View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter-Bold",
                color: colors["--color-primary-default"],
              }}
            >
              ${details.price}/
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Inter-Regular",
                  color: colors["--color-grey-default"],
                }}
              >
                Person
              </Text>
            </Text>
          </View>
          {/* Facilities Icons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 24,
            }}
          >
            {details.facilities.map((facility) => (
              <View key={facility.name} style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: colors["--color-accent-light"],
                    padding: 16,
                    borderRadius: 999,
                  }}
                >
                  <Ionicons
                    name={facility.icon as any}
                    size={24}
                    color={colors["--color-accent-default"]}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: colors["--color-grey-default"],
                    fontFamily: "Inter-Medium",
                  }}
                >
                  {facility.name}
                </Text>
              </View>
            ))}
          </View>
          {/* About Section */}
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Inter-Bold",
              color: colors["--color-secondary-default"],
              marginTop: 24,
            }}
          >
            About Destination
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors["--color-grey-default"],
              marginTop: 8,
              lineHeight: 24,
              fontFamily: "Inter-Regular",
            }}
          >
            {details.about}
            <Text
              style={{
                color: colors["--color-primary-default"],
                fontFamily: "Inter-SemiBold",
              }}
            >
              {" "}
              Read More
            </Text>
          </Text>
        </View>
      </ScrollView>
      {/* Footer Button */}
      <SafeAreaView
        style={{
          paddingHorizontal: 24,
          paddingVertical: 8,
          backgroundColor: colors["--color-primary-light"],
        }}
        edges={["bottom"]}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors["--color-primary-default"],
            width: "100%",
            paddingVertical: 16,
            borderRadius: 999,
          }}
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text
            style={{
              color: colors["--color-primary-light"],
              fontSize: 18,
              fontFamily: "Inter-Bold",
              textAlign: "center",
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;
