import React from "react";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Now from "./pages/Now";
import Fun from "./pages/Fun";
import My from "./pages/My";
import { colors } from "../Style";

const Tab = createMaterialTopTabNavigator();

const Container = styled.View`
  flex: 1;
`;

function Home() {
  return (
    <Container>
      <Tab.Navigator
        swipeEnabled={true}
        tabBarOptions={{
          activeTintColor: "#eee",
          labelStyle: { fontSize: 15 },
          style: {
            backgroundColor: colors.main,
            marginTop: 35,
          },
          indicatorStyle: { backgroundColor: "#eee" },
        }}
      >
        <Tab.Screen name="Now." component={Now} />
        <Tab.Screen name="Fun." component={Fun} />
        <Tab.Screen name="My." component={My} />
      </Tab.Navigator>
    </Container>
  );
}

export default Home;
