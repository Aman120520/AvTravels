import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MessageStackParamList } from "../../helper/navigationTypes";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

// Mock Data
const conversations = [
  {
    id: "1",
    name: "Sajib Rahman",
    message: "Hi, John! 👋 How are you doing?",
    time: "09:48",
    unread: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Adom Shafi",
    message: "Typing...",
    time: "08:42",
    unread: false,
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "HR Rumen",
    message: "You: Cool! 😎 Let's meet at 18:00 near the traveling!",
    time: "Yesterday",
    unread: false,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Anjelina",
    message: "You: Hey, will you come to the party on Saturday?",
    time: "07:56",
    unread: false,
    online: true,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "5",
    name: "Alexa Shorna",
    message: "Thank you for coming! Your or...",
    time: "06:52",
    unread: false,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

type MessageListNavigationProp = NativeStackNavigationProp<
  MessageStackParamList,
  "MessageScreen"
>;

const MessageScreen = () => {
  const navigation = useNavigation<MessageListNavigationProp>();
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

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
          Messages
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors["--color-primary-light"],
            padding: 12,
            borderRadius: 999,
          }}
        >
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={theme === "dark" ? "#fff" : "#333"}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={{ marginTop: 24, paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Inter-Bold",
              }}
              className="color-secondary"
            >
              Messages
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors["--color-primary-light"],
                padding: 8,
                borderRadius: 999,
              }}
            >
              <Ionicons
                name="create-outline"
                size={24}
                color={theme === "dark" ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          </View>
          {/* Search Bar */}
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
            className="bg-texinput rounded-2xl"
          >
            <Ionicons
              name="search"
              size={20}
              color={theme === "dark" ? "#fff" : "#333"}
            />
            <TextInput
              placeholder="Search for chats & messages"
              placeholderTextColor={theme === "dark" ? "#fff" : "#333"}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 16,
              }}
              className="color-secondary"
            />
          </View>
        </View>
        {/* Conversation List */}
        <View style={{ marginTop: 16 }}>
          {conversations.map((convo) => (
            <TouchableOpacity
              key={convo.id}
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  userId: convo.id,
                  userName: convo.name,
                  userAvatar: convo.avatar,
                })
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 24,
                paddingVertical: 16,
              }}
            >
              <View>
                <Image
                  source={{ uri: convo.avatar }}
                  style={{ width: 56, height: 56, borderRadius: 28 }}
                />
                {convo.online && (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: 16,
                      height: 16,
                      backgroundColor: "#22c55e",
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: colors["--color-primary-light"],
                    }}
                  />
                )}
              </View>
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Inter-Bold",
                  }}
                  className="color-secondary"
                >
                  {convo.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,

                    fontFamily: "Inter-Regular",
                    marginTop: 2,
                  }}
                  className="color-secondary"
                  numberOfLines={1}
                >
                  {convo.message}
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                  className="color-secondary"
                >
                  {convo.time}
                </Text>
                {convo.unread ? (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: colors["--color-primary-default"],
                      borderRadius: 4,
                      marginTop: 8,
                    }}
                  />
                ) : (
                  <Ionicons
                    name="checkmark-done"
                    size={20}
                    color={theme === "dark" ? "#fff" : "#333"}
                    style={{ marginTop: 4 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageScreen;
