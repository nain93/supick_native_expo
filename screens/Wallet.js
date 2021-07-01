import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { useForm } from "react-hook-form";
import { colors } from "../Style";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.main};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  width: 70%;
  text-align: center;
`;

const TextInput = styled.TextInput`
  width: 70%;
  height: 50px;
  border-radius: 20px;
  background-color: white;
  margin: 20px 0;
`;

const LinkBox = styled.TouchableOpacity`
  margin-top: 2%;
  width: 70%;
  height: 50px;
  padding: 13px 10px;
  border-radius: 20px;
  border: 1px solid white;
`;

const NextLink = styled.Text`
  text-align: center;
  color: white;
`;

function Wallet({ navigation }) {
  const dismissKeyBoard = () => {
    Keyboard.dismiss();
  };

  const nickNameRef = useRef();

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => navigation.navigate("Home");

  useEffect(() => {
    register("nickname", { required: true });
  }, [register]);

  useEffect(() => {
    nickNameRef?.current?.focus();
  }, []);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyBoard}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <Text>환영합니다! PICKnPiCK에서 사용하실 닉네임을 설정해주세요.</Text>
        <TextInput
          ref={nickNameRef}
          placeholder="닉네임"
          placeholderTextColor={colors.main}
          onSubmitEditing={handleSubmit(onSubmit)}
          onChangeText={(text) => setValue("nickname", text)}
          autoCapitalize={"none"}
          returnKeyLabel="next"
        />
        <LinkBox onPress={handleSubmit(onSubmit)}>
          <NextLink>다음</NextLink>
        </LinkBox>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Wallet;
