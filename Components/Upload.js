import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../Style";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  padding: 0 20px;
`;

const TitleInput = styled.TextInput`
  width: 100%;
  height: 10%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  padding: 0 10px;
`;

const BtnBox = styled.View`
  flex-direction: row;
`;

const ImgBtn = styled.TouchableOpacity`
  border: 1px solid ${colors.main};
  width: 80px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const ImgText = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const GifBtn = styled.TouchableOpacity`
  border: 1px solid ${colors.main};
  width: 80px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const GifText = styled.Text`
  color: ${colors.main};
  font-weight: 700;
`;

const ContentInput = styled.TextInput`
  width: 100%;
  height: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  padding: 0 10px;
`;

const TagInput = styled.TextInput`
  width: 100%;
  height: 10%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 10px;
`;

const AddBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 70%;
  height: 40px;
  padding: 10px 0px;
  border: 1px solid #ffc000;
  border-radius: 20px;
`;

const AddText = styled.Text`
  color: #ffc000;
  font-weight: 700;
`;

const KeyInput = styled.View`
  height: 100px;
`;

const Upload = () => {
  const dismissKeyBoard = () => {
    Keyboard.dismiss();
  };
  const handleAddBtn = () => {};

  const TitleRef = useRef();
  const CotentRef = useRef();
  const TagRef = useRef();

  useEffect(() => {
    TitleRef?.current?.focus();
  }, []);

  const handleFocus = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onVaild = (data) => {};

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyBoard}
      disabled={Platform.OS === "web"}
    >
      {/* <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={{ flex: 1 }}
      > */}
      <KeyboardAwareScrollView>
        <Container>
          <TitleInput
            ref={TitleRef}
            placeholder="제목"
            placeholderTextColor="rgba(0,0,0,0.4)"
            autoCapitalize={"none"}
            returnKeyType="next"
            onSubmitEditing={() => handleFocus(CotentRef)}
          />

          <BtnBox>
            <ImgBtn>
              <ImgText>이미지</ImgText>
            </ImgBtn>
            <GifBtn>
              <GifText>GIF</GifText>
            </GifBtn>
          </BtnBox>
          <ContentInput
            ref={CotentRef}
            placeholder="내용"
            placeholderTextColor="rgba(0,0,0,0.4)"
            autoCapitalize={"none"}
            returnKeyLabel="next"
            onSubmitEditing={() => handleFocus(TagRef)}
          />
          <TagInput
            ref={TagRef}
            placeholder="태그"
            placeholderTextColor="rgba(0,0,0,0.4)"
            autoCapitalize={"none"}
            returnKeyLabel="next"
          />

          <AddBtn onPress={handleAddBtn(onVaild)}>
            <AddText>등록</AddText>
          </AddBtn>
        </Container>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Upload;
