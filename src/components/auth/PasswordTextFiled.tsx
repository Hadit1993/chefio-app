

import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC, useState } from 'react'
import { authIcons } from '../../../assets/icons'
import TextField from '../common/TextField'

const PasswordTextFiled: FC<{ containerStyle?: StyleProp<ViewStyle>, autoFocus?: boolean }> = ({ containerStyle, autoFocus }) => {

 const [isPasswordVisisble, setPasswordVisible] = useState(false)
 const togglePasswordVivibility = () => setPasswordVisible(!isPasswordVisisble)

 return (
  <TextField
   containerStyle={containerStyle}
   placeholder='Password'
   leftIcon={authIcons.lock}
   rightIcon={isPasswordVisisble ? authIcons.show : authIcons.hide}
   secureTextEntry={!isPasswordVisisble}
   rightIconOnPress={togglePasswordVivibility}
   autoFocus={autoFocus}
  />
 )
}

export default PasswordTextFiled

