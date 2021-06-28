import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #ffc000;
`;

function Home() {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

export default Home;
