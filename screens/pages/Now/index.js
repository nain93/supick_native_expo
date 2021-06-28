import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
`;

function Now({ navigation }) {
  return (
    <Container>
      <Text>Now</Text>
    </Container>
  );
}

export default Now;
