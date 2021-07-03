import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../Style";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";

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

const Upload = () => {
  const dismissKeyBoard = () => {
    Keyboard.dismiss();
  };

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const TitleRef = useRef();
  const CotentRef = useRef();
  const TagRef = useRef();

  useEffect(() => {
    register("title", { required: true });
    register("content", { required: true });
    register("tag");
  }, [register]);

  const handleFocus = (nextOne) => {
    nextOne?.current?.focus();
  };

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyBoard}
      disabled={Platform.OS === "web"}
    >
      <KeyboardAwareScrollView
        style={{ paddingLeft: 20, paddingRight: 20 }}
        contentContainerStyle={{ height: 700 }}
      >
        <TitleInput
          ref={TitleRef}
          placeholder="제목"
          placeholderTextColor="rgba(0,0,0,0.4)"
          autoCapitalize={"none"}
          returnKeyType="next"
          onChangeText={(text) => setValue("title", text)}
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
          onChangeText={(text) => setValue("content", text)}
          onSubmitEditing={() => handleFocus(TagRef)}
        />
        <TagInput
          ref={TagRef}
          placeholder="태그"
          placeholderTextColor="rgba(0,0,0,0.4)"
          autoCapitalize={"none"}
          returnKeyLabel="next"
          onChangeText={(text) => setValue("tag", text)}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <AddBtn onPress={handleSubmit(onSubmit)}>
          <AddText>등록</AddText>
        </AddBtn>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Upload;
