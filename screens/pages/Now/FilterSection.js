import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ItemBox, Title, colors } from "../../../Style";
import Icon from "react-native-vector-icons/Ionicons";
import dummyData from "../../../data/dummyData";

const Container = styled.View``;

const FilterBox = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const FilterBtn = styled.TouchableOpacity``;

const FilterText = styled.Text`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  padding: 15px 0;
  background-color: ${colors.main};
  color: white;
  font-weight: 700;
`;

const Item = styled.View`
  width: ${(props) => (props.current ? "100%" : "49%")};
  margin-bottom: ${(props) => (props.current ? "10px" : "0px")};
`;

const ImageItem = styled.Image`
  height: 150px;
  border-radius: 15px;
  width: 100%;
`;

const DescItem = styled.View`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
`;

const DescText = styled.Text`
  color: black;
  font-weight: 700;
`;

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

function FilterSection() {
  const [filterCount, setFilterCount] = useState(1);
  const [clickMenu, setClickMenu] = useState("전체");
  const [filterData, setFilterData] = useState([
    ...dummyData.result.List7.data,
  ]);

  const handleFilterMoreBtn = () => {
    if (filterCount === 3) {
      setFilterCount(1);
      return;
    }
    setFilterCount((filterCount) => filterCount + 1);
    return;
  };

  useEffect(() => {
    if (clickMenu === "전체") {
      setFilterData([...dummyData.result.List4.data]);
      return;
    }
    if (clickMenu === "운동") {
      setFilterData([...dummyData.result.List5.data]);
      return;
    }
    if (clickMenu === "연애") {
      setFilterData([...dummyData.result.List6.data]);
      return;
    }
    if (clickMenu === "정치") {
      setFilterData([...dummyData.result.List7.data]);
      return;
    }
  }, [clickMenu]);
  return (
    <Container>
      <Title>이번에는 무슨 PICK?</Title>
      <FilterBox>
        <FilterBtn onPress={() => setClickMenu("전체")}>
          <FilterText
            style={
              clickMenu === "전체"
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
        <FilterBtn onPress={() => setClickMenu("운동")}>
          <FilterText
            style={
              clickMenu === "운동"
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
        <FilterBtn onPress={() => setClickMenu("연애")}>
          <FilterText
            style={
              clickMenu === "연애"
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
        <FilterBtn onPress={() => setClickMenu("정치")}>
          <FilterText
            style={
              clickMenu === "정치"
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
      <ItemBox>
        {filterData
          .slice(0 + 4 * (filterCount - 1), 4 * filterCount)
          .map((item, idx) => {
            return (
              <Item key={item.id}>
                <ImageItem source={{ uri: item.img }} />
                <DescItem>
                  <DescText>{item.name}</DescText>
                  <DescText>
                    <IconView>
                      <Icon name="heart" size={15} color="red" />
                      <IconText>180</IconText>
                    </IconView>
                    <IconView>
                      <Icon name="arrow-undo-sharp" size={15} color="black" />
                      <IconText>60</IconText>
                    </IconView>
                  </DescText>
                </DescItem>
              </Item>
            );
          })}
      </ItemBox>
      <MoreBtn onPress={handleFilterMoreBtn}>
        <MoreText>
          {clickMenu} PICK 더보기 {filterCount}/3
        </MoreText>
      </MoreBtn>
    </Container>
  );
}

export default FilterSection;
