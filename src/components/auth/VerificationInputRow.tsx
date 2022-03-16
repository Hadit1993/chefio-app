

import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { RefObject, useRef } from 'react'
import TextField from '../common/TextField'
import styles from '../../styles/screens/auth/verficationCode.style'



const VerificationInputRow = () => {

 const textFields = useRef<RefObject<TextInput>[]>(new Array(4).fill(0).map(() => useRef<TextInput>(null)))

 const onChangeText = (index: number, text: string) => {
  if (text.length === 1 && index < 3) textFields.current[index + 1].current?.focus()
  else if (text.length === 0 && index > 0) textFields.current[index - 1].current?.focus()
 }

 return (
  <View style={styles.inputRow}>
   {textFields.current.map((value, index) => (
    <TextField
     ref={value}
     key={index}
     keyboardType='number-pad'
     maxLength={1}
     style={styles.input}
     containerStyle={styles.inputContainer}
     autoFocus={index === 0}
     onChangeText={(text) => onChangeText(index, text)}
    />
   ))}
  </View>
 )
}

export default VerificationInputRow

