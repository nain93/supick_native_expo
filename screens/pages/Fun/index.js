import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

function Fun() {
  return (
    <Container>
      <Text>지금 떠오르는 FUN!</Text>
    </Container>
  );
}

export default Fun;
