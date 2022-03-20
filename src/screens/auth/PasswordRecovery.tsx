import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import signinStyles from '../../styles/screens/auth/signin.style'
import { H1, P2 } from '../../components/common/AppText'
import EmailTextField from '../../components/auth/EmailTextField'
import Button from '../../components/common/Button'
import { useAuthNavigation } from '../../navigation/AuthStack'
import { VERIFICATION_CODE } from '../../navigation/routes'


const PasswordRecovery = () => {

 const navigation = useAuthNavigation()

 const navigateToVerificationCode = () => navigation.push(VERIFICATION_CODE, { passwordRecovery: true })

 return (
  <ScreenWrapper>
   <View style={signinStyles.container}>
    <H1 style={[signinStyles.title, { marginTop: 107 }]}>
     Password recovery
    </H1>

    <P2 style={signinStyles.description}>Enter your email to recover your password</P2>

    <EmailTextField containerStyle={signinStyles.emailInputContainer} />

    <Button style={styles.signin} title='Sign In' onPress={navigateToVerificationCode} />
   </View>
  </ScreenWrapper>
 )
}

export default PasswordRecovery

const styles = StyleSheet.create({
 signin: {
  marginTop: 32
 }
})