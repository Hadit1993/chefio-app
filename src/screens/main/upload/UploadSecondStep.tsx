

import { Image, Platform, ScrollView, Text, TouchableOpacity, UIManager, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../../components/common/ScreenWrapper'
import { useUploadNavigation } from '../../../navigation/UploadStack'
import UploadAppBar from '../../../components/main/upload/UploadAppBar'
import { H2 } from '../../../components/common/AppText'
import AppTheme from '../../../../assets/theme'
import { mainIcons } from '../../../../assets/icons'



import Divider from '../../../components/main/Divider'
import styles from '../../../styles/screens/main/uploadSecondStep.style'
import SwipeabTextField from '../../../components/main/upload/SwipeableTextField'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface IngredientInput {
  id: number,
  value: string
}

const initialIngredientsInputs: IngredientInput[] = [
  { id: 1, value: '' },
  { id: 2, value: '' }
]



const UploadSecondStep = () => {

  const [ingredients, setIngredients] = useState<IngredientInput[]>(initialIngredientsInputs)
  const [steps, setSeps] = useState<IngredientInput[]>(initialIngredientsInputs)


  const addIngridient = () => {
    const maxId = ingredients.length ? Math.max(...ingredients.map(val => val.id)) : 0
    setIngredients([...ingredients, { id: maxId + 1, value: '' }])
  }

  const deleteIngredient = (id: number) => {
    const newIngredients = ingredients.filter(value => value.id !== id)
    setIngredients(newIngredients)
  }

  const onIngridientChange = (index: number, value: string) => {
    ingredients[index] = { ...ingredients[index], value }
    setIngredients([...ingredients])
  }

  const addStep = () => {
    const maxId = Math.max(...steps.map(val => val.id))
    setIngredients([...steps, { id: maxId + 1, value: '' }])
  }

  const deleteStep = (id: number) => {
    const newSteps = steps.filter(value => value.id !== id)
    setSeps(newSteps)
  }

  const navigation = useUploadNavigation()
  return (
    <ScreenWrapper>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View>
          <UploadAppBar currentStep={2} navigation={navigation} addPadding />
          <H2 style={styles.ingredients}>Ingredients</H2>
          {ingredients.map((item, index) => <SwipeabTextField
            key={item.id.toString()}
            containerStyle={styles.inputContainer} placeholder='Enter ingredient'
            value={item.value}
            onChangeText={(value) => onIngridientChange(index, value)}
            onSwiped={() => deleteIngredient(item.id)} />)}

          <TouchableOpacity style={styles.addIngridientBtn} onPress={addIngridient}>
            <Image style={AppTheme.iconStyle} source={mainIcons.plus} />
            <Text style={styles.ingridientBtnTitle}>Ingredient</Text>
          </TouchableOpacity>

          <Divider />
          <H2 style={styles.ingredients}>Steps</H2>

        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}



export default UploadSecondStep

