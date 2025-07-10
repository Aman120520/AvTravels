import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../helper/navigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../resources/Images";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center justify-between bg-primary overflow-hidden pl-1 pr-5 p-1 rounded-full">
            <Image
              source={Images.posts.one}
              className="rounded-full h-12 w-12 mx-2"
            />
            <Text className="font-inter-Medium text-lg ">Leonardo</Text>
          </View>
          <TouchableOpacity
            className="bg-light_gray p-3 rounded-full justify-center items-center"
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Ionicons name="notifications" size={26} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
