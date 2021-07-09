import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import dummyData from "../../../data/dummyData";
import { colors } from "../../../Style";

const Container = styled.View`
  padding: 20px;
  flex-direction: row;
`;

const ProfileImg = styled.Image`
  width: 35%;
  height: 100px;
  margin-right: 5%;
`;

const ProfileDesc = styled.View`
  justify-content: center;
`;

const ProfileId = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const ProfileAdress = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const IconBox = styled.View``;

const IconText = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const ProfileSection = () => {
  const { isLogin, nickName } = useSelector((state) => state.userReducer);

  return (
    <Container>
      <ProfileImg source={{ uri: dummyData.result.List7.data[0].img }} />
      <ProfileDesc>
        <ProfileId>{nickName}</ProfileId>
        <ProfileAdress>SW1q2w3e...2q2w5e</ProfileAdress>
        <IconBox>
          <IconText>180</IconText>
        </IconBox>
      </ProfileDesc>
    </Container>
  );
};

export default ProfileSection;
