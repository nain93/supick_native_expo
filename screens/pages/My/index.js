import React from "react";
import styled from "styled-components/native";
import Ad from "../../../Components/Ad";
import ProfileSection from "./ProfileSection";
import dummyData from "../../../data/dummyData";
import MyNavSection from "./MyNavSection";
import MySettingSection from "./MySettingSection";

const Container = styled.ScrollView`
  flex: 1;
`;

function My({ navigation }) {
  return (
    <Container>
      <ProfileSection />
      <MyNavSection navigation={navigation} />
      <Ad dummyData={dummyData.result.Ad1.data[2]} />
      <MySettingSection />
    </Container>
  );
}

export default My;
