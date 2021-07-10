import React, { useState } from "react";
import styled from "styled-components/native";
import { colors, Title, ItemBox } from "../../../Style";
import dummyData from "../../../data/dummyData";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View``;

const Item = styled.View`
  flex-direction: row;
`;

const ItemImg = styled.Image`
  width: 30%;
  height: 110px;
  border-radius: 10px;
  margin: 10px 0;
`;

const ItemDesc = styled.View`
  width: 70%;
  height: 100%;
  padding: 6% 20px;
`;

const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const ItemInfoBox = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

const ItemNickname = styled.Text`
  margin-right: 10px;
`;

const ItemDay = styled.Text`
  opacity: 0.5;
`;

const ItemIcon = styled.Text``;

const IconView = styled.View`
  width: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconText = styled.Text`
  color: black;
  margin-left: 2px;
  font-weight: 700;
`;

const MoreBtn = styled.TouchableOpacity`
  align-items: center;
  margin: 20px 0;
`;

const MoreText = styled.Text`
  text-align: center;
  width: 70%;
  height: 40px;
  padding: 10px 0px;
  border: 1px solid ${colors.main};
  border-radius: 15px;
  color: ${colors.main};
  font-weight: 700;
`;

const FunListSection = () => {
  const [funData, setFunData] = useState(
    [...dummyData.result.List6.data].slice(0, 4)
  );

  return (
    <Container>
      <Title style={{ color: colors.main }}>이번엔 무슨 FUN?!</Title>
      <ItemBox>
        {funData.map((item) => (
          <Item key={item.id}>
            <ItemImg source={{ uri: item.img }} />
            <ItemDesc>
              <ItemTitle>동화 여우와 두루미의 결말</ItemTitle>
              <ItemInfoBox>
                <ItemNickname>멋쟁이 신사</ItemNickname>
                <ItemDay>2021.05.22</ItemDay>
              </ItemInfoBox>
              <ItemIcon>
                <IconView>
                  <Ionicons name="heart" size={15} color="red" />
                  <IconText>180</IconText>
                </IconView>
                <IconView>
                  <Ionicons name="arrow-undo-sharp" size={15} color="black" />
                  <IconText>60</IconText>
                </IconView>
              </ItemIcon>
            </ItemDesc>
          </Item>
        ))}
      </ItemBox>
      <MoreBtn>
        <MoreText>더보기</MoreText>
      </MoreBtn>
    </Container>
  );
};

export default FunListSection;
