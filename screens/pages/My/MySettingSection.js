import React from "react";
import styled from "styled-components/native";
import { colors, Title } from "../../../Style";

const Container = styled.View``;

const SettingBtnBox = styled.View`
  padding: 0 20px;
`;

const SettingBtn = styled.TouchableOpacity`
  background-color: ${colors.main};
  width: 100%;
  height: 60px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SettingText = styled.Text`
  color: white;
  font-weight: 700;
`;

const MySettingSection = () => {
  return (
    <Container>
      <Title style={{ color: colors.main }}>설정</Title>
      <SettingBtnBox>
        <SettingBtn>
          <SettingText>공지 사항</SettingText>
        </SettingBtn>
        <SettingBtn>
          <SettingText>이용 약관</SettingText>
        </SettingBtn>
        <SettingBtn>
          <SettingText>FAQ / 문의</SettingText>
        </SettingBtn>
      </SettingBtnBox>
    </Container>
  );
};

export default MySettingSection;
