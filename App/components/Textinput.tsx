import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";

type Props = {
  placeholder: string;
  onChangeText: () => void;
  secureTextEntry: boolean;
  refs: any;
  error: any;
} & TextInputProps;

const Textinput = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  refs,
  error,
}: Props) => {
  return (
    <View className="flex-1items-center  justify-center w-full my-2 py-2">
      <TextInput
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        ref={refs}
        className="bg-texinput w-full color-secondary rounded-2xl px-5 py-5 font-inter-medium text-l"
      />
      {error && <Text className="text-red-500 mt-2">{error}</Text>}
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({});
