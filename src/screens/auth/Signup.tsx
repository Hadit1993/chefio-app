

import { View } from 'react-native'
import React from 'react'
import { H1, P1, P2 } from '../../components/common/AppText'
import signinStyles from '../../styles/screens/auth/signin.style'

import Button from '../../components/common/Button'
import signupStyles from '../../styles/screens/auth/signup.style'
import PasswordRuleSection from '../../components/auth/PasswordRuleSection'

import EmailTextField from '../../components/auth/EmailTextField'
import PasswordTextFiled from '../../components/auth/PasswordTextFiled'
import ScreenWrapper from '../../components/common/ScreenWrapper'

const {

 container,
 title,
 description,
 emailInputContainer,
 passInputContainer } = signinStyles

const { signup } = signupStyles


const Signup = () => {

 return (
  <ScreenWrapper>
   <View style={container}>
    <H1 style={[title, { marginTop: 11 }]}>Welcome!</H1>
    <P2 style={description}>Please enter your account here</P2>
    <EmailTextField containerStyle={emailInputContainer} />
    <PasswordTextFiled containerStyle={passInputContainer} />
    <PasswordRuleSection />
    <Button style={signup} title='Sign Up' onPress={() => { }} />
   </View>
  </ScreenWrapper>
 )
}

export default Signup







