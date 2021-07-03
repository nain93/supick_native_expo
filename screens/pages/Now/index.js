import React from "react";
import styled from "styled-components/native";
import dummyData from "../../../data/dummyData";
import Ad from "../../../Components/Ad";
import FilterSection from "./FilterSection";
import NowPopularSection from "./NowPopularSection";

const Container = styled.ScrollView`
  flex: 1;
`;

function Now({ navigation }) {
  return (
    <Container>
      <NowPopularSection navigation={navigation} />
      <Ad dummyData={dummyData.result.Ad1.data[0]} />
      <FilterSection />
    </Container>
  );
}

export default Now;
