import React from "react";
import styled from "styled-components/native";
import landing from "../assets/landing.png";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffc000;
`;

const Logo = styled.Image`
  max-width: 100%;
`;

const GoToHome = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 40px;
  margin-top: 20px;
  padding: 15px 30px;
`;

const ConnectWallet = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 40px;
  margin-top: 20px;
  padding: 15px 40px;
  background-color: white;
`;

const HomeText = styled.Text`
  color: white;
  font-size: 15px;
`;

const WalletText = styled.Text`
  color: #ffc000;
  font-size: 15px;
`;

function Welcome({ navigation }) {
  const goToHome = () => navigation.navigate("Home");
  const goToWallet = () => navigation.navigate("Wallet");

  return (
    <Container>
      {/* <Logo resizeMode="contain" source={landing} /> */}
      <GoToHome onPress={goToHome}>
        <HomeText>나중에 월렛 생성하기</HomeText>
      </GoToHome>

      <ConnectWallet onPress={goToWallet}>
        <WalletText>지금 바로 월렛 연동</WalletText>
      </ConnectWallet>
    </Container>
  );
}

export default Welcome;
