import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Upload from "../Components/Upload";

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
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Upload"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
          }}
          component={Upload}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNav;
