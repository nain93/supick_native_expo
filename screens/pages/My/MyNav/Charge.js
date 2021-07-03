import React from "react";
import styled from "styled-components/native";
import { colors, Title } from "../../../../Style";

const Container = styled.View`
  flex: 1;
`;

const Charge = () => {
  return (
    <Container>
      <Title style={{ color: colors.main }}>이벤트 참여</Title>
    </Container>
  );
};

export default Charge;
