import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Upload from "../Components/Upload";
import DetailReady from "../screens/pages/Detail/DetailReady";
import DetailTinderPick from "../screens/pages/Detail/DetailTinderPick";
import DetailNormalPick from "../screens/pages/Detail/DetailNormalPick";
import { colors } from "../Style";
import TinderResult from "../screens/pages/Result/TinderResult";

const TransitionScreenOptions = {
  ...TransitionPresets.ModalSlideFromBottomIOS,
};
const Stack = createStackNavigator();

function LoggedOutNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
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
        <Stack.Screen
          name="DetailReady"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
          }}
          component={DetailReady}
        />
        <Stack.Screen
          name="DetailTinderPick"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.main,
              shadowColor: "transparent",
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={DetailTinderPick}
        />
        <Stack.Screen
          name="DetailNormalPick"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.main,
              shadowColor: "transparent",
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={DetailNormalPick}
        />
        <Stack.Screen
          name="TinderResult"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
          }}
          component={TinderResult}
        />
        <Stack.Screen
          name="NormalResult"
          options={{
            title: "뒤로",
            headerTitleStyle: { fontWeight: "700" },
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.main,
              shadowColor: "transparent",
              elevation: 0, // android
              shadowOpacity: 0, //ios
            },
          }}
          component={TinderResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedOutNav;
