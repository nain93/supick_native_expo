import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NormalResult = ({ navigation }) => {
  return (
    <View>
      <Text>NormalResult</Text>
      <TouchableOpacity onPress={navigation.goback(1)}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NormalResult;
