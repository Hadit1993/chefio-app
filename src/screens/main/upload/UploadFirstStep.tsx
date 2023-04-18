import { Image, LayoutChangeEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../../../components/common/ScreenWrapper'
import { H2, H3, Small } from '../../../components/common/AppText'
import { mainImages } from '../../../../assets/images'
import TextField from '../../../components/common/TextField'
import CookingDuration from '../../../components/main/home/CookingDuration'
import Button from '../../../components/common/Button'
import useKeyboardShowListener from '../../../utils/hooks/useKeyboardShowListener'
import { useUploadNavigation } from '../../../navigation/UploadStack'
import { UPLOAD_SECOND_STEP } from '../../../navigation/routes'
import styles from '../../../styles/screens/main/uploadFisrtStep.style'
import UploadAppBar from '../../../components/main/upload/UploadAppBar'

const UploadFirstStep = () => {
 const [duration, setDuration] = useState(0)
 const scrollView = useRef<ScrollView>(null)
 const foodNamePosition = useRef(0)
 const navigation = useUploadNavigation()

 const onValueChange = (value: number | number[]) => {
  setDuration(value as number)
 }
 const onFoodNameInputLayout = (event: LayoutChangeEvent) => {
  foodNamePosition.current = event.nativeEvent.layout.y
 }
 const onKeyboardAppear = () => {
  scrollView.current?.scrollTo({ y: foodNamePosition.current })
 }
 const navigateToNext = () => navigation.navigate(UPLOAD_SECOND_STEP)

 useKeyboardShowListener(onKeyboardAppear)

 return (
  <ScreenWrapper>
   <ScrollView ref={scrollView} keyboardShouldPersistTaps='handled'>
    <View style={styles.container}>
     <UploadAppBar currentStep={1} navigation={navigation} />
     <TouchableOpacity style={styles.photoContainer}>
      <Image style={styles.placeHolder} source={mainImages.placeholder} />
      <H3>Add Cover Photo</H3>
      <Small style={styles.sizeLimit}>(up to 2 Mb)</Small>
     </TouchableOpacity>
     <H2 style={styles.inputLabel}>Food Name</H2>
     <TextField containerOnLayout={onFoodNameInputLayout} placeholder='Enter food name' />
     <H2 style={styles.inputLabel}>Description</H2>
     <TextField
      multiline
      style={styles.descriptionInput} containerStyle={styles.descriptionContainer} placeholder='Tell a little about your food' />

     <CookingDuration duration={duration} onValueChange={onValueChange} />
     <Button style={styles.next} title='Next' onPress={navigateToNext} />
    </View>
   </ScrollView>
  </ScreenWrapper>
 )
}

export default UploadFirstStep





