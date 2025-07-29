import React, { useState } from "react";
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
import { ThemeContext } from "../../Context/ThemeContext";
import { themes } from "../../resources/theme";

// Mock Data
const userData = {
  firstName: "Leonardo",
  lastName: "Ahmed",
  location: "Sylhet Bangladesh",
  mobile: "01758-000666",
  avatar: "https://i.pravatar.cc/150?u=leonardo",
};

const FormInput = ({
  label,
  value,
  colors,
  ...props
}: {
  label: string;
  value: string;
  colors: any;
  [key: string]: any;
}) => (
  <View style={{ marginTop: 24 }}>
    <Text
      style={{
        fontSize: 16,
        fontFamily: "Inter-Medium",

        marginBottom: 8,
      }}
      className="color-secondary"
    >
      {label}
    </Text>
    <View
      style={{
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
      className="bg-texinput rounded-2xl"
    >
      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
        }}
        className="color-secondary"
        value={value}
        placeholderTextColor={colors["--color-grey-default"]}
        {...props}
      />
      <Ionicons name="checkmark-circle" size={24} color={colors} />
    </View>
  </View>
);

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { theme } = React.useContext(ThemeContext);
  const colors = theme === "dark" ? "#fff" : "#000";
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [location, setLocation] = useState(userData.location);
  const [mobile, setMobile] = useState(userData.mobile);

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
          onPress={() => navigation.goBack()}
          style={{
            padding: 12,
            borderRadius: 999,
          }}
          className="bg-texinput"
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={theme === "dark" ? "#fff" : "#333"}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Inter-SemiBold",
          }}
          className="color-secondary"
        >
          Edit Profile
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-SemiBold",
            }}
            className="color-secondary"
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
      >
        {/* Profile Picture */}
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Image
            source={{ uri: userData.avatar }}
            style={{ width: 96, height: 96, borderRadius: 48 }}
          />
          <TouchableOpacity>
            <Text
              className="color-secondary"
              style={{
                fontFamily: "Inter-Medium",
                marginTop: 12,
              }}
            >
              Change Profile Picture
            </Text>
          </TouchableOpacity>
        </View>
        {/* Form */}
        <FormInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          colors={colors}
        />
        <FormInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          colors={colors}
        />
        <FormInput
          label="Location"
          value={location}
          onChangeText={setLocation}
          colors={colors}
        />
        {/* Mobile Number Input */}
        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              marginBottom: 8,
            }}
            className="color-secondary"
          >
            Mobile Number
          </Text>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
            className="bg-texinput rounded-2xl"
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 8,
                borderRightWidth: 1,
              }}
            >
              <Text
                className="color-secondary"
                style={{
                  fontSize: 16,
                }}
              >
                +88
              </Text>
              <Ionicons
                name="chevron-down"
                size={16}
                color={theme === "dark" ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                marginLeft: 8,
              }}
              className="color-secondary"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={theme === "dark" ? "#fff" : "#000"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
