import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { MessageStackParamList } from "../../helper/navigationTypes";
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

// Mock Data
const messagesData = [
  { id: "1", text: "Hello!", time: "9:24", sender: "other" },
  {
    id: "2",
    text: "Thank you very mouch for your traveling, we really like the apartments. we will stay here for anather 5 days...",
    time: "9:30",
    sender: "other",
  },
  { id: "3", text: "Hello!", time: "9:34", sender: "me" },
  { id: "4", text: "I'm very glab you like it 👍", time: "9:35", sender: "me" },
  {
    id: "5",
    text: "We are arriving today at 01:45, will someone be at home?",
    time: "9:37",
    sender: "other",
  },
  { id: "6", text: "I will be at home", time: "9:39", sender: "me" },
];

type ChatScreenRouteProp = RouteProp<MessageStackParamList, "ChatScreen">;

const ChatBubble = ({ message }: { message: (typeof messagesData)[0] }) => {
  const isMyMessage = message.sender === "me";
  return (
    <View className={`my-2 ${isMyMessage ? "items-end" : "items-start"}`}>
      <View
        className={`p-3 rounded-2xl max-w-[80%] ${
          isMyMessage
            ? "bg-blue-500 rounded-br-none"
            : "bg-gray-200 rounded-bl-none"
        }`}
      >
        <Text className={`${isMyMessage ? "text-white" : "text-slate-800"}`}>
          {message.text}
        </Text>
      </View>
      <View className="flex-row items-center mt-1">
        <Text className="text-xs text-gray-400 mr-1">{message.time}</Text>
        {isMyMessage && (
          <Ionicons name="checkmark-done" size={16} color="gray" />
        )}
      </View>
    </View>
  );
};

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<ChatScreenRouteProp>();
  const { userName } = route.params;
  const [message, setMessage] = useState("");
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? themes.dark : themes.light;

  return (
    <SafeAreaView className={`flex-1 bg-primary-light`} edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
      >
        {/* Header */}
        <View className="px-6 py-3 flex-row justify-between items-center border-b border-gray-200">
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
          <View className="items-center">
            <Text className="text-lg font-inter-SemiBold color-secondary">
              {userName}
            </Text>
            <Text className="text-sm text-green-500">Active Now</Text>
          </View>
          <TouchableOpacity className="p-2">
            <Ionicons
              name="call-outline"
              size={24}
              color={theme === "dark" ? "#fff" : "#333"}
            />
          </TouchableOpacity>
        </View>

        {/* Messages Area */}
        <ScrollView
          className="flex-1 px-6 pt-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Text className="text-center text-gray-400 text-sm mb-4">Today</Text>
          {messagesData.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
        </ScrollView>

        {/* Input Footer */}
        <View className="px-6 py-3 border-t border-gray-200 flex-row items-center">
          <View className="flex-1 bg-gray-100 rounded-full flex-row items-center px-4 py-2">
            <TextInput
              placeholder="Type you message"
              className="flex-1 text-base"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity className="p-2">
              <Ionicons name="attach-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="ml-3 bg-blue-500 p-3 rounded-full">
            <Ionicons name="mic" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
