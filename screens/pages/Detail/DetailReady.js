import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../Style";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const ImgBox = styled.View`
  width: 100%;
  align-items: center;
  margin: 20px 0;
  height: 40%;
`;

const ImgItem = styled.Image`
  height: 100%;
  width: 80%;
  border-radius: 15px;
`;

const DescBox = styled.View`
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const OtherText = styled.Text`
  margin: 10px 0;
  font-weight: 700;
`;

const JoinText = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const JoinBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 7%;
  margin: 0 auto;
  margin-bottom: 10%;
  border-radius: 5px;
  background-color: ${colors.main};
`;

const JoinBtnText = styled.Text`
  font-weight: 700;
`;

const DetailReady = ({ route, navigation }) => {
  const { category, name, card, img } = route.params.item;

  const handleFiterCard = () => {
    if (card === 1) {
      navigation.navigate("DetailTinderPick");
      return;
    }
    if (card === 2) {
      navigation.navigate("DetailNormalPick");
      return;
    }
    return;
  };

  return (
    <Container>
      <ImgBox>
        <ImgItem source={{ uri: img }} />
      </ImgBox>
      <DescBox>
        <MainText>{name}</MainText>
        <OtherText>{category}</OtherText>
        <JoinText>182명 참여중</JoinText>
      </DescBox>
      <JoinBtn onPress={handleFiterCard}>
        <JoinBtnText>참여시작!</JoinBtnText>
      </JoinBtn>
    </Container>
  );
};

export default DetailReady;
