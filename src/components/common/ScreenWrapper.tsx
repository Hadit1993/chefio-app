
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const ScreenWrapper: FC<{ style?: StyleProp<ViewStyle> }> = (props) => {
 return (
  <SafeAreaView style={[styles.container, props.style]}>
   {props.children}
  </SafeAreaView>
 )
}

export default ScreenWrapper



const styles = StyleSheet.create({
 container: {
  backgroundColor: 'white',
  flex: 1
 }
})