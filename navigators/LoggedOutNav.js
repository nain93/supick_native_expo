import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
const Stack = createStackNavigator();

function LoggedOutNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
          component={Welcome}
        />
        <Stack.Screen
          name="Wallet"
          options={{
            headerShown: false,
          }}
          component={Wallet}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNav;
