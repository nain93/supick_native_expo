import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Welcome({ navigation }) {
  return (
    <View>
      <Text>Hi</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <View>
          <Text>Welcome</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
