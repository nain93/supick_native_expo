import React from "react";
import styled from "styled-components/native";
import { colors, Title } from "../../../../Style";

const Container = styled.View`
  flex: 1;
`;

const Exchange = () => {
  return (
    <Container>
      <Title style={{ color: colors.main }}>교환할 코인</Title>
    </Container>
  );
};

export default Exchange;
