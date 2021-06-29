import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import dummyData from "../../../data/dummyData";
import Ad from "../../Components/Ad";
import { ItemBox } from "../../Style";
import FilterSection from "../../Components/FilterSection";
import Icon from "react-native-vector-icons/Ionicons";

const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.Text`
  font-weight: 700;
  margin: 20px 0;
`;

const Item = styled.View`
  width: ${(props) => (props.current ? "100%" : "49%")};
  margin-bottom: ${(props) => (props.current ? "10px" : "0px")};
  position: relative;
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
  margin: 20px 0;
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

const FilterBox = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const FilterBtn = styled.TouchableOpacity``;

const FilterText = styled.Text`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  padding: 15px 0;
  background-color: #ffc000;
  color: white;
  font-weight: 700;
`;

function Now() {
  const [pickCount, setPickCount] = useState(1);
  const [filterCount, setFilterCount] = useState(1);
  const [pickData, setPickData] = useState([]);
  const [filterData, setFilterData] = useState([
    ...dummyData.result.List7.data,
  ]);
  const [clickMenu, setClickMenu] = useState("All");

  const handleMoreBtn = () => {
    if (pickCount === 3) {
      setPickCount(1);
      return;
    }
    setPickCount((pickCount) => pickCount + 1);
  };

  useEffect(() => {
    setPickData((pickData) => [...pickData, ...dummyData.result.List1.data]);
  }, []);

  useEffect(() => {
    if (clickMenu === "All") {
      setFilterData([...dummyData.result.List4.data]);
      return;
    }
    if (clickMenu === "Exr") {
      setFilterData([...dummyData.result.List5.data]);
      return;
    }
    if (clickMenu === "love") {
      setFilterData([...dummyData.result.List6.data]);
      return;
    }
    if (clickMenu === "politics") {
      setFilterData([...dummyData.result.List7.data]);
      return;
    }
  }, []);

  return (
    <Container>
      <Title>지금 떠오르는 PICK!</Title>
      <ItemBox>
        {pickData
          .slice(0 + 3 * (pickCount - 1), 3 * pickCount)
          .map((item, idx) => {
            if (idx === 0) {
              return (
                <Item key={item.id} current={true}>
                  <ImageItem source={{ uri: `${item.img}` }} />
                  <DescItem>
                    <DescText>{item.name}</DescText>
                    <DescText>
                      <IconView>
                        <Icon name="heart" size={20} color="#eee" />
                        <IconText>180</IconText>
                      </IconView>
                      <IconView>
                        <Icon name="arrow-undo-sharp" size={20} color="#eee" />
                        <IconText>60</IconText>
                      </IconView>
                    </DescText>
                  </DescItem>
                </Item>
              );
            }
            return (
              <Item key={item.id}>
                <ImageItem source={{ uri: `${item.img}` }} />
                <DescItem>
                  <DescText>{item.name}</DescText>
                  <DescText>
                    <IconView>
                      <Icon name="heart" size={20} color="#eee" />
                      <IconText>180</IconText>
                    </IconView>
                    <IconView>
                      <Icon name="arrow-undo-sharp" size={20} color="#eee" />
                      <IconText>60</IconText>
                    </IconView>
                  </DescText>
                </DescItem>
              </Item>
            );
          })}
      </ItemBox>
      <MoreBtn onPress={handleMoreBtn}>
        <MoreText>인기 PICK 더보기 {pickCount}/3</MoreText>
      </MoreBtn>

      <Ad dummyData={dummyData.result.Ad1.data[0]} />

      <Title>이번에는 무슨 PICK?</Title>
      <FilterBox>
        <FilterBtn onPress={() => setClickMenu("All")}>
          <FilterText
            style={
              clickMenu === "All"
                ? {
                    backgroundColor: "white",
                    color: "black",
                  }
                : {}
            }
          >
            전체
          </FilterText>
        </FilterBtn>
        <FilterBtn onPress={() => setClickMenu("Exr")}>
          <FilterText
            style={
              clickMenu === "Exr"
                ? {
                    backgroundColor: "white",
                    color: "black",
                  }
                : {}
            }
          >
            운동
          </FilterText>
        </FilterBtn>
        <FilterBtn onPress={() => setClickMenu("love")}>
          <FilterText
            style={
              clickMenu === "love"
                ? {
                    backgroundColor: "white",
                    color: "black",
                  }
                : {}
            }
          >
            연애
          </FilterText>
        </FilterBtn>
        <FilterBtn onPress={() => setClickMenu("politics")}>
          <FilterText
            style={
              clickMenu === "politics"
                ? {
                    backgroundColor: "white",
                    color: "black",
                  }
                : {}
            }
          >
            정치
          </FilterText>
        </FilterBtn>
      </FilterBox>
      <FilterSection filterData={filterData} filterCount={filterCount} />
    </Container>
  );
}

export default Now;
