import React from "react";
import styled from "styled-components/native";
import { ItemBox } from "../Style";

const Item = styled.View`
  width: ${(props) => (props.current ? "100%" : "49%")};
  margin-bottom: ${(props) => (props.current ? "10px" : "0px")};
`;

const ImageItem = styled.Image`
  height: 150px;
  border-radius: 15px;
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

function FilterSection({ filterData, filterCount }) {
  return (
    <ItemBox>
      {filterData
        .slice(0 + 4 * (filterCount - 1), 4 * filterCount)
        .map((item, idx) => {
          return (
            <Item key={item.id}>
              <ImageItem source={{ uri: `${item.img}` }} />
              <DescItem>
                <DescText>{item.name}</DescText>
                <DescText>{item.category}</DescText>
              </DescItem>
            </Item>
          );
        })}
    </ItemBox>
  );
}

export default FilterSection;
