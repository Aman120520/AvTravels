import { StyleSheet, Text, TextInputProps, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  onChangeText: () => void;
  secureTextEntry: boolean;
  refs: any;
} & TextInputProps;

const Textinput = ({ title, onChangeText, secureTextEntry, refs }: Props) => {
  return (
    <View className="flex-1 flex-row items-center justify-center">
      <Text>Textinput</Text>
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({});
