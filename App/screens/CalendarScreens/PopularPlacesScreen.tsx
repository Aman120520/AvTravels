import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Images from "../../resources/Images";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

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
  {
    id: "51",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "6",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "7",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "8",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
  {
    id: "9",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "10",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "11",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "12",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
  {
    id: "13",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "14",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "15",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "16",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
  {
    id: "17",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "18",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "19",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "20",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
  {
    id: "21",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "22",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "23",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "24",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
  {
    id: "25",
    name: "Niladri Reservoir",
    location: "Tekergat, Sunamgnj",
    rating: 4.7,
    price: 459,
    image: Images.posts.eleven,
  },
  {
    id: "26",
    name: "Casa Las Tirtugas",
    location: "Av Damero, Mexico",
    rating: 4.8,
    price: 894,
    image: Images.posts.ten,
  },
  {
    id: "27",
    name: "Aonang Villa Resort",
    location: "Bastola, Islampur",
    rating: 4.3,
    price: 761,
    image: Images.posts.nine,
  },
  {
    id: "28",
    name: "Rangauti Resort",
    location: "Sylhet, Airport Road",
    rating: 4.5,
    price: 857,
    image: Images.posts.two,
  },
];

const PopularPlacesScreen = () => {
  const navigation = useNavigation();
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

  const PopularPlaceCard = ({
    item,
    colors,
  }: {
    item: (typeof popularPlaces)[0];
    colors: any;
  }) => (
    <View style={{ width: "50%", padding: 8 }}>
      <View
        style={{
          backgroundColor: colors["--color-primary-light"],
          borderRadius: 18,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 2,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 160,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: colors["--color-primary-light"] + "99",
            padding: 8,
            borderRadius: 999,
          }}
        >
          <Ionicons
            name="heart"
            size={16}
            color={theme === "dark" ? "#fff" : "#333"}
          />
        </TouchableOpacity>
        <View style={{ padding: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Bold",
            }}
            className="color-secondary"
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <Ionicons
              name="location-sharp"
              size={14}
              color={theme === "dark" ? "#fff" : "#333"}
            />
            <Text
              style={{
                fontSize: 12,

                marginLeft: 4,
              }}
              className="color-secondary"
              numberOfLines={1}
            >
              {item.location}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Ionicons
              name="star"
              size={14}
              color={theme === "dark" ? "#fff" : "#333"}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Inter-SemiBold",
                marginLeft: 4,
              }}
              className="color-secondary"
            >
              {item.rating}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter-Bold",
              marginTop: 8,
            }}
            className="color-secondary"
          >
            ${item.price}/
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter-Regular",
              }}
              className="color-secondary"
            >
              Person
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-primary-light"
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 8,
          marginTop: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Inter-SemiBold",
            marginLeft: -24,
          }}
          className="color-secondary"
        >
          Popular Places
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Inter-Bold",

              marginBottom: 16,
            }}
            className="color-secondary"
          >
            All Popular Places
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {popularPlaces.map((item) => (
              <PopularPlaceCard key={item.id} item={item} colors={colors} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PopularPlacesScreen;
