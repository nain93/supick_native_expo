import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Now from "./pages/Now";
import Fun from "./pages/Fun";
import My from "./pages/My";
import { colors } from "../Style";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

// const Container = styled.SafeAreaView`
//   flex: 1;
// `;

function Home() {
  return (
    <SafeAreaView
      mode="margin"
      style={{ flex: 1, backgroundColor: colors.main }}
    >
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          activeTintColor: "#eee",
          inactiveTintColor: "#eee",
          labelStyle: { fontSize: 15 },
          style: {
            backgroundColor: colors.main,
          },

          indicatorStyle: { backgroundColor: "#eee" },
        }}
      >
        <Tab.Screen name="Now." component={Now} />
        <Tab.Screen name="Fun." component={Fun} />
        <Tab.Screen name="My." component={My} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default Home;
