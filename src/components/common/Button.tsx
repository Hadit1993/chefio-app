import { GestureResponderEvent, Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import AppTheme from '../../../assets/theme'
import styles from '../../styles/components/common/button.style'

interface Props {
  title: string,
  onPress: ((event: GestureResponderEvent) => void)
  isOutlined?: boolean,
  color?: string,
  style?: StyleProp<ViewStyle>,
  leftIcon?: ImageSourcePropType,
  labelColor?: string
}

const Button: FC<Props> = ({ title, onPress, isOutlined, color, style, leftIcon, labelColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {
      borderWidth: isOutlined ? 2 : 0,
      borderColor: isOutlined ? AppTheme.colors.Outline : 'transaparent',
      backgroundColor: isOutlined ?
        'transparent'
        : (color || AppTheme.colors.Primary)
    }, style]}>
      {!!leftIcon && <Image style={styles.leftIcon} source={leftIcon} />}
      <Text style={[styles.title, !!(isOutlined || labelColor) && { color: labelColor || AppTheme.colors.SecondaryText }]}>{title}</Text>

    </TouchableOpacity>
  )
}

export default Button

