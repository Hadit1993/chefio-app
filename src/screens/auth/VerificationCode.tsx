
import { Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import { H1, P2 } from '../../components/common/AppText'
import signinStyles from '../../styles/screens/auth/signin.style'
import Button from '../../components/common/Button'
import styles from '../../styles/screens/auth/verficationCode.style'
import VerificationInputRow from '../../components/auth/VerificationInputRow'
import { useRoute } from '@react-navigation/native'
import { RESET_PASSWORD, useAuthNavigation, VerificationCodeRouteProp } from '../../navigation/AuthStack'

const VerificationCode = () => {

 const { params } = useRoute<VerificationCodeRouteProp>()
 const navigation = useAuthNavigation()

 const navigateToNext = () => {
  if (params?.passwordRecovery)
   navigation.navigate(RESET_PASSWORD)
 }


 return (
  <ScreenWrapper>
   <View style={signinStyles.container}>
    <H1 style={[signinStyles.title, { marginTop: 43 }]}>Check your email</H1>
    <P2 style={signinStyles.description}>We.ve sent the code to your email</P2>
    <VerificationInputRow />
    <P2 style={styles.timerLabel}>code expires in: <Text style={styles.timer}>03:12</Text></P2>
    <Button style={styles.verify} title={params?.passwordRecovery ? 'Next' : 'Verify'} onPress={navigateToNext} />
    <Button isOutlined style={styles.sendAgain} title='Send again' onPress={() => { }} />
   </View>
  </ScreenWrapper>
 )
}

export default VerificationCode

