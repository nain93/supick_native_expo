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
            headerTitle: false,
            headerTransparent: true,
          }}
          component={Welcome}
        />
        <Stack.Screen
          name="Wallet"
          options={{
            headerTitle: false,
            headerTransparent: true,
          }}
          component={Wallet}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: false,
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNav;
