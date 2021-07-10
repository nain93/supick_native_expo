import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ItemBox, Title, colors } from "../../../Style";
import { Ionicons } from "@expo/vector-icons";
import dummyData from "../../../data/dummyData";

const Container = styled.View``;

const Item = styled.View`
  width: ${(props) => (props.current ? "100%" : "49%")};
  margin-bottom: ${(props) => (props.current ? "10px" : "0px")};
  position: relative;
  margin-bottom: 10px;
`;

const ImageItem = styled.Image`
  height: 150px;
  border-radius: 15px;
`;

const DescItem = styled.View`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px 10px;
`;

const DescText = styled.Text`
  color: white;
`;

const IconView = styled.View`
  width: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconText = styled.Text`
  color: white;
  margin-left: 2px;
  font-weight: 700;
`;

const MoreBtn = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const MoreText = styled.Text`
  text-align: center;
  width: 70%;
  height: 40px;
  padding: 10px 0px;
  border: 1px solid #ffc000;
  border-radius: 15px;
  color: #ffc000;
  font-weight: 700;
`;

const FunPopularSection = () => {
  const [funCount, setFunCount] = useState(1);
  const [funData, setFunData] = useState([]);

  const handleMoreBtn = () => {
    if (funCount === 3) {
      setFunCount(1);
      return;
    }
    setFunCount((funCount) => funCount + 1);
    return;
  };

  useEffect(() => {
    setFunData((funData) => [...funData, ...dummyData.result.List4.data]);
  }, []);

  return (
    <Container>
      <Title style={{ color: `${colors.main}` }}>지금 떠오르는 FUN!</Title>
      <ItemBox>
        {funData.slice(0 + 4 * (funCount - 1), 4 * funCount).map((item) => {
          return (
            <Item key={item.id}>
              <ImageItem source={{ uri: `${item.img}` }} />
              <DescItem>
                <DescText>{item.name}</DescText>
                <DescText>
                  <IconView>
                    <Ionicons name="heart" size={20} color="#eee" />
                    <IconText>180</IconText>
                  </IconView>
                  <IconView>
                    <Ionicons name="arrow-undo-sharp" size={20} color="#eee" />
                    <IconText>60</IconText>
                  </IconView>
                </DescText>
              </DescItem>
            </Item>
          );
        })}
      </ItemBox>
      <MoreBtn onPress={handleMoreBtn}>
        <MoreText>인기 FUN 더보기 {funCount}/3</MoreText>
      </MoreBtn>
    </Container>
  );
};

export default FunPopularSection;
