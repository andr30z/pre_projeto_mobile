import { TextInputProps, TextStyle } from "react-native";
import styled from "styled-components/native";

interface BaseText {
  color?: string;
  fontSize?: string;
  align?: string;
}

export interface BaseInputProps extends TextInputProps{
  inputWidth?: number | string;
  inputHeight?: number | string;
}

export const BaseText = styled.Text<BaseText>`
  color: ${({ color }) => color || "#000"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  text-align: ${({ align }) => align || "auto"};
`;

export const BaseInput = styled.TextInput<BaseInputProps>`
  padding-left: 15px;
  border-radius: 15px;
  background-color: #fff;
  width: ${({ inputWidth }) => inputWidth || "190px"};
  height: ${({ inputHeight }) => inputHeight || "13%"};
`;
