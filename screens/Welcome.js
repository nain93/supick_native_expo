import React from "react";
import styled from "styled-components/native";
import landing from "../assets/landing.png";
import Carousel from "react-native-snap-carousel";
import dummyData from "../data/dummyData";
import { colors } from "../Style";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.main};
`;

const Logo = styled.Image`
  max-width: 100%;
`;

const ConnectSection = styled.View`
  padding: 0 20px;
`;

const GoToHome = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 40px;
  padding: 15px 30px;
`;

const ConnectWallet = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 40px;
  margin-top: 5%;
  margin-bottom: 150px;
  padding: 15px 30px;
  background-color: white;
`;

const HomeText = styled.Text`
  color: white;
  font-size: 15px;
  text-align: center;
`;

const WalletText = styled.Text`
  color: #ffc000;
  font-size: 15px;
  text-align: center;
`;

const SlideBtn = styled.TouchableOpacity`
  margin: 40% 0px;
`;

const SlideImg = styled.Image`
  height: 300px;
  border-radius: 15px;
`;

const renderItem = ({ item }) => {
  return (
    <SlideBtn>
      <SlideImg source={{ uri: item.img }} />
    </SlideBtn>
  );
};

function Welcome({ navigation }) {
  const goToHome = () => navigation.navigate("Home");
  const goToWallet = () => navigation.navigate("Wallet");

  return (
    <Container>
      {/* <Logo resizeMode="contain" source={landing} /> */}
      <Carousel
        layout={"default"}
        renderItem={renderItem}
        data={dummyData.result.List1.data}
        sliderWidth={415}
        itemWidth={300}
        loop={true}
      />
      <ConnectSection>
        <GoToHome onPress={goToHome}>
          <HomeText>나중에 월렛 생성하기</HomeText>
        </GoToHome>

        <ConnectWallet onPress={goToWallet}>
          <WalletText>지금 바로 월렛 연동</WalletText>
        </ConnectWallet>
      </ConnectSection>
    </Container>
  );
}

export default Welcome;
