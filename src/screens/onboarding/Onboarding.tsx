

import { Image, View } from 'react-native'
import React from 'react'

import Button from '../../components/common/Button'
import styles from '../../styles/screens/onboarding/onboarding.style'
import { H1, P1 } from '../../components/common/AppText'
import { SIGNIN, useAuthNavigation } from '../../navigation/AuthStack'
import { onboardingImages } from '../../../assets/images'
import ScreenWrapper from '../../components/common/ScreenWrapper'




const Onboarding = () => {

 const navigation = useAuthNavigation()
 const navigateToSignin = () => navigation.navigate(SIGNIN)

 return (
  <ScreenWrapper>


   <Image style={styles.image} source={onboardingImages.onboarding} />

   <H1 style={styles.title}>
    Start Cooking
   </H1>

   <P1 style={styles.description}>Let’s join our community{"\n"}
    to cook better food!</P1>

   <Button style={styles.button} title='Get Started' onPress={navigateToSignin} />

  </ScreenWrapper>
 )
}

export default Onboarding

