import { FlexAlignType } from "react-native";
import styled from "styled-components/native";
export interface PageContainerInterface {
  backgroundColor?: string;
  align?: FlexAlignType;
  justify?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "center"
    | "flex-end"
    | "flex-start"
    | undefined;
  flex?: number;
  flexDirection?: "row" | "column";
  borderRadius?: string | undefined;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  marginVertical?: string | undefined;
  marginHorizontal?: string | undefined;
  paddingVertical?: string | undefined;
  paddingHorizontal?: string | undefined;
  marginTop?: string | undefined;
  width?: string;
  height?: string;
  boxShadow?: string;
}

const align = ({
  justify,
  align,
  flex,
  flexDirection,
}: PageContainerInterface) => {
  let centeringStyles = {
    "align-items": "",
    "justify-content": "",
    "flex-direction": "",
    flex: 1,
  };
  if (!align && !justify) return;

  if (align) centeringStyles["align-items"] = align;

  if (justify) centeringStyles["justify-content"] = justify;

  if (flexDirection) centeringStyles["flex-direction"] = flexDirection;

  if (flex !== undefined) {
    centeringStyles["flex"] = flex;
  }
  return centeringStyles;
};

export const BaseContainer = styled.View<PageContainerInterface>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  ${(props) => {
    return {
      "flex-wrap": props.flexWrap,
    };
  }};
  margin-top: ${(props) => props.marginTop || 0};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  padding-vertical: ${(props) => props.paddingVertical || 0};
  padding-horizontal: ${(props) => props.paddingHorizontal || 0};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  ${align};
`;

export const ScrollContainer = styled.ScrollView<PageContainerInterface>`
  ${align}
`;
