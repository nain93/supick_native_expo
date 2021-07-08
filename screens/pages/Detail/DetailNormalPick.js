import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import { colors, Title } from "../../../Style";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.main};
  align-items: center;
`;

const QaText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 700;
  margin: 10% 0;
`;

const PickBtnBox = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20%;
`;

const PickBtn = styled.TouchableOpacity`
  width: 65%;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 2% 0;
`;

const PickText = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const CountText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 10%;
`;

const DetailNormalPick = ({ navigation }) => {
  const [pickCount, setPickCount] = useState(1);

  const refresh = () => {
    if (pickCount === 8) {
      setPickCount(1);
      return;
    }
  };

  const handleAPick = () => {
    if (pickCount === 8) {
      navigation.navigate("NormalResult");
      return;
    }
    // todo A pick state 저장
    setPickCount((pickCount) => pickCount + 1);
    return;
  };

  const handleBPick = () => {
    if (pickCount === 8) {
      navigation.navigate("NormalResult");
      return;
    }
    // todo B pick state 저장
    setPickCount((pickCount) => pickCount + 1);
    return;
  };

  useFocusEffect(
    useCallback(() => {
      return () => refresh();
    }, [pickCount])
  );

  return (
    <Container>
      <Title style={{ fontSize: 20, color: "white", zIndex: 1 }}>
        Q) 당신의 연애스타일은..?
      </Title>
      <QaText>{"당신은 이러이러한 상황에 있다.\n이때, 당신의 선택은?"}</QaText>
      <PickBtnBox>
        <PickBtn onPress={handleAPick}>
          <PickText>A. 버린다</PickText>
        </PickBtn>
        <PickBtn onPress={handleBPick}>
          <PickText>B. 좋아한다</PickText>
        </PickBtn>
      </PickBtnBox>
      <CountText>{pickCount} / 8</CountText>
    </Container>
  );
};

export default DetailNormalPick;
