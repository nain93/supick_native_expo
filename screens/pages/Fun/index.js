import React from "react";
import styled from "styled-components/native";
import FunPopularSection from "./FunPopularSection";
import Ad from "../../../Components/Ad";
import FunSlideSection from "./FunSlideSection";
import FunListSection from "./FunListSection";
import dummyData from "../../../data/dummyData";
import Icon from "react-native-vector-icons/FontAwesome5";

const Container = styled.ScrollView`
  flex: 1;
  position: relative;
`;

const UploadBtn = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #ff5b00;
  border-radius: 30px;
  position: absolute;
  z-index: 999;
  right: 10px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
`;

function Fun({ navigation }) {
  const goToUpload = () => navigation.navigate("Upload");
  return (
    <>
      <UploadBtn
        onPress={goToUpload}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Icon name="pen" size={25} color="#eee" />
      </UploadBtn>
      <Container>
        <FunPopularSection />
        <Ad dummyData={dummyData.result.Ad1.data[1]} />
        <FunSlideSection />
        <FunListSection />
      </Container>
    </>
  );
}

export default Fun;
