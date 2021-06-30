import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 150px;
`;

const ImageItem = styled.Image`
  height: 150px;
`;

function Ad({ dummyData }) {
  return (
    <Container>
      <ImageItem current={true} source={{ uri: `${dummyData.img}` }} />
    </Container>
  );
}

export default Ad;
