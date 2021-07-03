import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../Style";

const Container = styled.View`
  padding: 0 20px;
`;

const BtnStyle = styled.TouchableOpacity`
  background-color: ${colors.main};
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const MyNavText = styled.Text`
  color: white;
  font-weight: 700;
`;

// auth

const AccountBtnBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AccountBtn = styled(BtnStyle)`
  width: 30%;
`;

// accountbox

const MyBtnBox = styled.View`
  align-items: center;
`;

const MyBtn = styled(BtnStyle)`
  width: 100%;
`;

// mybtnbox

const MyNavSection = ({ navigation }) => {
  const goToExchange = () => navigation.navigate("ExChange");
  const goToCharge = () => navigation.navigate("Charge");
  const goToHistory = () => navigation.navigate("History");
  const goToMyPick = () => navigation.navigate("MyPick");
  const goToMyFun = () => navigation.navigate("MyFun");

  return (
    <Container>
      <AccountBtnBox>
        <AccountBtn onPress={goToExchange}>
          <MyNavText>교환</MyNavText>
        </AccountBtn>
        <AccountBtn onPress={goToCharge}>
          <MyNavText>충전</MyNavText>
        </AccountBtn>
        <AccountBtn onPress={goToHistory}>
          <MyNavText>내역</MyNavText>
        </AccountBtn>
      </AccountBtnBox>
      <MyBtnBox>
        <MyBtn onPress={goToMyPick} style={{ marginTop: 20, marginBottom: 20 }}>
          <MyNavText>MY PICK</MyNavText>
        </MyBtn>
        <MyBtn onPress={goToMyFun} style={{ marginBottom: 20 }}>
          <MyNavText>MY FUN</MyNavText>
        </MyBtn>
      </MyBtnBox>
    </Container>
  );
};

export default MyNavSection;
