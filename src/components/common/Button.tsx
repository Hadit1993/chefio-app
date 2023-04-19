import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import {
  ButtonContainerTag,
  ButtonLeftIconTag,
  ButtonTitleTag,
} from "../../styles/components/common/button.style";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isOutlined?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  leftIcon?: ImageSourcePropType;
  labelColor?: string;
}

const Button: FC<Props> = ({
  title,
  onPress,
  isOutlined,
  color,
  style,
  leftIcon,
  labelColor,
}) => {
  return (
    <ButtonContainerTag
      onPress={onPress}
      style={style}
      isOutlined={isOutlined}
      color={color}
    >
      {!!leftIcon && <ButtonLeftIconTag source={leftIcon} />}
      <ButtonTitleTag isOutlined={isOutlined} labelColor={labelColor}>
        {title}
      </ButtonTitleTag>
    </ButtonContainerTag>
  );
};

export default Button;
