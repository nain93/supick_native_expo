import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;

const NormalResult = ({ navigation: { goBack }, route }) => {
  const { onGoBack } = route.params;

  return (
    <Container>
      <Text>NormalResult</Text>
      <TouchableOpacity>
        <Button
          onPress={() => {
            goBack();
            onGoBack();
          }}
          title="Go back from ProfileScreen"
        />
      </TouchableOpacity>
    </Container>
  );
};

export default NormalResult;
