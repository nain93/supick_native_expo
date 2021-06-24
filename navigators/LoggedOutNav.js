import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const stack = createStackNavigator();

function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.screen name="Welcome" component={Welcome} />
      <Stack.screen name="Login" component={Login} />
      <Stack.screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}

export default LoggedOutNav;
