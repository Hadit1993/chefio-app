

import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import { splashImages } from '../../../assets/images'
import AppTheme from '../../../assets/theme'
import { H1, } from '../../components/common/AppText'

const Splash = () => {
 return (
  <ScreenWrapper>
   <StatusBar hidden />
   <View style={styles.container}>

    <Image style={styles.logo} source={splashImages.splashLogo} />

    <H1>Chefio</H1>
   </View>

  </ScreenWrapper>
 )
}

export default Splash

const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1
 },

 logo: {
  width: AppTheme.screenWidth * 2 / 3,
  height: AppTheme.screenWidth * 2 / 3
 }
})