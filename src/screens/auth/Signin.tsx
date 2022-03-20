

import { ScrollView, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { H1, H3, P2 } from '../../components/common/AppText'
import { authIcons } from '../../../assets/icons'
import Button from '../../components/common/Button'

import styles from '../../styles/screens/auth/signin.style'
import { useFocusEffect } from '@react-navigation/native'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import EmailTextField from '../../components/auth/EmailTextField'
import PasswordTextFiled from '../../components/auth/PasswordTextFiled'
import useKeyboardShowListener from '../../utils/hooks/useKeyboardShowListener'
import { useAuthNavigation } from '../../navigation/AuthStack'
import { SIGNUP, VERIFICATION_CODE, PASSWORD_RECOVERY } from '../../navigation/routes'


const Signin = () => {

 const navigation = useAuthNavigation()
 const navigateToSignup = () => navigation.navigate(SIGNUP)
 const navigateToVerificationCode = () => navigation.navigate(VERIFICATION_CODE)
 const navigateToPasswordRecovery = () => navigation.navigate(PASSWORD_RECOVERY)
 const scrollRef = useRef<ScrollView>(null)

 const onKeyboardDidShow = () => {
  scrollRef.current?.scrollToEnd()
 }

 useKeyboardShowListener(onKeyboardDidShow)



 return (
  <ScreenWrapper>
   <ScrollView ref={scrollRef} keyboardShouldPersistTaps='handled'>
    <View style={styles.container}>
     <H1 style={styles.title}>Welcome Back!</H1>
     <P2 style={styles.description}>Please enter your account here</P2>


     <EmailTextField containerStyle={styles.emailInputContainer} />

     <PasswordTextFiled containerStyle={styles.passInputContainer} />


     <TouchableWithoutFeedback onPress={navigateToPasswordRecovery}>
      <P2 style={styles.forgotPassword}>Forgot password?</P2>
     </TouchableWithoutFeedback>


     <Button style={styles.login} title='Login' onPress={navigateToVerificationCode} />

     <P2 style={styles.continueWith}>Or continue with</P2>

     <Button style={styles.google} title='Google' leftIcon={authIcons.google} onPress={() => { }} />
     <View style={styles.bottomRow}>
      <P2 style={styles.dontYou}>Don’t have any account?</P2>

      <TouchableWithoutFeedback onPress={navigateToSignup}>
       <H3 style={styles.signup}>Sign Up</H3>
      </TouchableWithoutFeedback>
     </View>
    </View>
   </ScrollView>
  </ScreenWrapper>
 )

}

export default Signin

