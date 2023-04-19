import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AppTheme from "../../../../assets/theme";
import styled, { css } from "styled-components/native";

export const ButtonContainerTag = styled(TouchableOpacity)<{
  isOutlined?: boolean;
  color?: string;
}>`
  height: 56px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ isOutlined, color }) =>
    isOutlined
      ? css`
          border: 2px solid ${AppTheme.colors.Outline};
        `
      : css`
          background-color: ${color ?? AppTheme.colors.Primary};
        `}
`;

export const ButtonTitleTag = styled.Text<{
  isOutlined?: boolean;
  labelColor?: string;
}>`
  color: white;
  font-family: ${AppTheme.getFont("Inter-Bold")};
  font-size: 15px;
  line-height: 18.15px;
  letter-spacing: 0.7px;

  ${({ isOutlined, labelColor }) =>
    (isOutlined || labelColor) &&
    css`
      color: ${labelColor || AppTheme.colors.SecondaryText};
    `}
`;

export const ButtonLeftIconTag = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
