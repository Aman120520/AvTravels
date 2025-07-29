import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

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
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

  return (
    <View style={{ flex: 1, backgroundColor: colors["--color-light-default"] }}>
      {/* Background Map Placeholder */}
      <Image
        source={{ uri: "https://i.stack.imgur.com/7bI1Y.jpg" }}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      {/* Header */}
      <SafeAreaView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
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
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Inter-SemiBold",
            color: colors["--color-secondary-default"],
            marginLeft: -24,
          }}
        >
          View
        </Text>
      </SafeAreaView>
      {/* Map Markers */}
      {mapDetails.locations.map((loc) => (
        <View
          key={loc.name}
          style={{
            position: "absolute",
            top: `${parseFloat(loc.top)}%`,
            left: `${parseFloat(loc.left)}%`,
          }}
        >
          <View
            style={{
              backgroundColor: colors["--color-primary-light"],
              padding: 8,
              borderRadius: 12,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}
          >
            <Image
              source={{ uri: loc.image }}
              style={{ width: 40, height: 40, borderRadius: 8 }}
            />
            <View style={{ marginLeft: 8 }}>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  color: colors["--color-secondary-default"],
                  fontSize: 16,
                }}
              >
                {loc.name}
              </Text>
              <Text
                style={{ fontSize: 12, color: colors["--color-grey-default"] }}
              >
                {loc.distance}
              </Text>
            </View>
          </View>
          {/* Triangle Pointer */}
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderLeftWidth: 10,
              borderLeftColor: "transparent",
              borderRightWidth: 10,
              borderRightColor: "transparent",
              borderTopWidth: 10,
              borderTopColor: colors["--color-primary-light"],
              alignSelf: "center",
            }}
          />
        </View>
      ))}
      {/* Bottom Details Card */}
      <SafeAreaView
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
        edges={["bottom"]}
      >
        <View
          style={{
            backgroundColor: colors["--color-primary-light"],
            margin: 16,
            padding: 20,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: mapDetails.image }}
              style={{ width: 64, height: 64, borderRadius: 16 }}
            />
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Inter-Bold",
                  color: colors["--color-secondary-default"],
                }}
              >
                {mapDetails.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Ionicons
                  name="star"
                  size={16}
                  color={colors["--color-accent-default"]}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: colors["--color-secondary-default"],
                    marginLeft: 4,
                  }}
                >
                  {mapDetails.rating}
                </Text>
                <View style={{ flexDirection: "row", marginLeft: 16 }}>
                  {mapDetails.avatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={{ uri: avatar }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: colors["--color-primary-light"],
                        marginLeft: index > 0 ? -8 : 0,
                      }}
                    />
                  ))}
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors["--color-grey-default"],
                    fontWeight: "500",
                    marginLeft: 4,
                  }}
                >
                  +50
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: colors["--color-grey-default"],
              marginVertical: 16,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="time-outline"
                size={20}
                color={colors["--color-grey-default"]}
              />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 16,
                  color: colors["--color-grey-default"],
                }}
              >
                {mapDetails.time}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors["--color-primary-default"],
                paddingHorizontal: 32,
                paddingVertical: 12,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  color: colors["--color-primary-light"],
                  fontFamily: "Inter-Bold",
                  fontSize: 16,
                }}
              >
                See On The Map
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapScreen;
