import { Image, ImageSourcePropType, NativeSyntheticEvent, StyleProp, TextInput, TextInputFocusEventData, TextInputProps, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import React, { FC, forwardRef, RefObject, useMemo, useState } from 'react'
import AppTheme from '../../../assets/theme'
import { Small } from './AppText'
import styles from '../../styles/components/common/textfield.style'

type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>

interface TextFieldProps {
  error?: string,
  isInvalid?: string
  leftIcon?: ImageSourcePropType
  rightIcon?: ImageSourcePropType,
  rightIconOnPress?: () => void,
  containerStyle?: StyleProp<ViewStyle>,
  isVerificationCode?: boolean,
  disableFocusEffect?: boolean
}

const TextField = forwardRef<TextInput, TextInputProps & TextFieldProps>((props, ref) => {

  const [isFocused, setFocused] = useState(false)
  const borderColor = useMemo(() => (props.isInvalid ? 'red' : isFocused && !props.disableFocusEffect ? AppTheme.colors.Primary : AppTheme.colors.Outline), [isFocused, props.isInvalid])
  const tintColor = useMemo(() => (props.isInvalid ? 'red' : isFocused && !props.disableFocusEffect ? AppTheme.colors.Primary : undefined), [isFocused, props.error])
  const borderWidth = props.isInvalid || isFocused ? 2 : 1

  const onFocus = (_e: InputEvent) => {
    setFocused(true)
  }
  const onBlure = (_e: InputEvent) => {
    setFocused(false)
  }

  return (
    <>
      <View style={[styles.container, { borderColor, borderWidth }, props.containerStyle]}>
        {props.leftIcon &&
          <Image
            style={[styles.leftIcon, { tintColor }]}
            source={props.leftIcon} />}
        <TextInput
          placeholderTextColor='#9FA5C0'
          {...props}
          onFocus={onFocus}
          onBlur={onBlure}
          style={[styles.textInput, props.style]}
          ref={ref}
        />
        {props.rightIcon && <TouchableWithoutFeedback onPress={props.rightIconOnPress}>
          <Image
            style={styles.rightIcon}
            source={props.rightIcon} />
        </TouchableWithoutFeedback>
        }
      </View>

      {!!props.error && <Small style={styles.error}>{props.error}</Small>}

    </>
  )
})

export default TextField

