import React from "react";
import { View, Text } from "react-native";
import Input from "../../../../Components/Input/Input.Component";
import { CONSTANTS } from "../../../../Constants";
import { BaseText } from "../../../../GlobalStyles/BaseStyles";
import { BaseContainer } from "../../../../GlobalStyles/Containers.Style";
import Icons from "../../../../Illustrations/icons-2.svg";

const HeaderActivity: React.FC = () => {
  return (
    <BaseContainer align="center">
      <BaseContainer
        flex={0.5}
        justify="center"
        align="center"
        style={{
          width: "100%",
        }}
      >
        <BaseText color="#fff" align="center" fontSize="20px">
          Descubra Atividades
        </BaseText>
        <BaseText
          color="#fff"
          align="center"
          fontSize="24px"
          style={{
            marginTop: 7,
          }}
        >
          Explore Novos Tópicos
        </BaseText>
      </BaseContainer>
      <BaseContainer
        justify="center"
        align="center"
        style={{
          width: "100%",
          paddingHorizontal: 8,
        }}
      >
        <Icons width="100%" height="80%" color="#fff" />
      </BaseContainer>
      <BaseContainer justify="flex-start" align="center" flex={0.5}>
        <Input
          placeholder="Procure por atividades"
          inputWidth="300px"
          inputHeight="56px"
          style={{ marginTop: 20 }}
        />
      </BaseContainer>
    </BaseContainer>
  );
};

export default HeaderActivity;
