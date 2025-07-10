import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

type Props = {
  name: string;
  onPress: () => void;
} & TextInputProps;

const PrimaryButton = ({ name, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary w-full rounded-2xl px-5 py-4 font-inter-medium text-sm my-2 items-center justify-center"
    >
      <Text className="color-white font-inter-Medium text-xl">{name}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
