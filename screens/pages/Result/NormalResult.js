import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;

const NormalResult = () => {
  return (
    <Container>
      <Text>NormalResult</Text>
      <TouchableOpacity>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default NormalResult;
