import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../Style";
import { useDispatch } from "react-redux";
import { logIn, userNickName } from "../reducers/userReducer";

const Text = styled.Text`
  width: 70%;
  text-align: center;
  margin: 20px 0;
`;

const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding: 0 10px;
`;

const LinkBox = styled.TouchableOpacity`
  margin-top: 20px;
  width: 70%;
  height: 50px;
  padding: 13px 10px;
  border-radius: 10px;
  border: 1px solid white;
`;

const NextLink = styled.Text`
  text-align: center;
  color: white;
`;

const ErrorText = styled.Text`
  margin-top: 5px;
  color: red;
`;

function Wallet({ navigation }) {
  const dismissKeyBoard = () => {
    Keyboard.dismiss();
  };

  const dispatch = useDispatch();

  const nickNameRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const { nickname } = data;
    dispatch(userNickName(nickname));
    dispatch(logIn(true));
    navigation.navigate("Home");
    // * nickname 저장, 로그인 true
  };

  useEffect(() => {
    register("nickname", { required: "닉네임을 입력해주세요" });
  }, [register]);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyBoard}
      disabled={Platform.OS === "web"}
    >
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.main, flex: 1 }}
        contentContainerStyle={{
          height: 700,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          {"환영합니다!\nPICKnPiCK에서 사용하실 닉네임을\n설정해주세요."}
        </Text>
        <TextInput
          ref={nickNameRef}
          placeholder="닉네임"
          placeholderTextColor={colors.main}
          onSubmitEditing={handleSubmit(onSubmit)}
          onChangeText={(text) => setValue("nickname", text)}
          autoCapitalize={"none"}
          returnKeyLabel="next"
        />

        <ErrorMessage
          errors={errors}
          name="nickname"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
        <LinkBox onPress={handleSubmit(onSubmit)}>
          <NextLink>다음</NextLink>
        </LinkBox>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Wallet;
