import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #ffc000;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  width: 70%;
  text-align: center;
`;

const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
  border-radius: 20px;
  background-color: white;
  margin: 20px 0;
`;

const LinkBox = styled.TouchableOpacity`
  margin-top: 50px;
  width: 70%;
  height: 50px;
  padding: 13px 10px;
  border-radius: 20px;
  border: 1px solid white;
`;

const NextLink = styled.Text`
  text-align: center;
  color: white;
`;

function Wallet({ navigation }) {
  const goToHome = () => navigation.navigate("Home");

  return (
    <Container>
      <Text>환영합니다! PICKnPiCK에서 사용하실 닉네임을 설정해주세요.</Text>
      <TextInput
        placeholder="닉네임"
        placeholderTextColor="#ffc000"
        returnKeyLabel="next"
      />
      <LinkBox onPress={goToHome}>
        <NextLink>다음</NextLink>
      </LinkBox>
    </Container>
  );
}

export default Wallet;
