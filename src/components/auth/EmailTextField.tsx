


import { StyleProp, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { authIcons } from '../../../assets/icons'
import TextField from '../common/TextField'

const EmailTextField: FC<{ containerStyle?: StyleProp<ViewStyle> }> = ({ containerStyle }) => {
 return (
  <TextField
   keyboardType='email-address'
   containerStyle={containerStyle}
   placeholder='Email or phone number'
   leftIcon={authIcons.message} />
 )
}

export default EmailTextField

