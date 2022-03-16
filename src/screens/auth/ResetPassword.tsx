

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import signinStyles from '../../styles/screens/auth/signin.style'
import { H1, P2 } from '../../components/common/AppText'
import PasswordTextFiled from '../../components/auth/PasswordTextFiled'
import PasswordRuleSection from '../../components/auth/PasswordRuleSection'
import Button from '../../components/common/Button'

const ResetPassword = () => {

 const onDone = () => { }

 return (
  <ScreenWrapper>
   <View style={signinStyles.container}>
    <H1 style={[signinStyles.title, styles.title]}>Reset your password</H1>
    <P2 style={signinStyles.description}>Please enter your new password</P2>
    <PasswordTextFiled containerStyle={styles.passInputContainer} autoFocus />
    <PasswordRuleSection />
    <Button style={styles.done} title='Done' onPress={onDone} />
   </View>
  </ScreenWrapper>
 )
}

export default ResetPassword

const styles = StyleSheet.create({
 title: { marginTop: 79 },
 passInputContainer: { marginTop: 24 },
 done: { marginTop: 24 }
})