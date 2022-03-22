import Modal from "react-native-modal";
import { View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ModalRef } from "./SearchModal";
import { H2 } from "../../components/common/AppText";
import { RecipeType } from "../../data/categories";
import CategorySection from "../../components/main/home/CategorySection";
import AppTheme from "../../../assets/theme";
import Button from "../../components/common/Button";
import styles from '../../styles/modals/main/filterModal.style'
import CookingDuration from "../../components/main/home/CookingDuration";


const FilterModal = forwardRef<ModalRef>((_, ref) => {
  const [isShown, setShown] = useState(false)
  const [recipeType, setRecipeType] = useState<RecipeType>('All')
  const [duration, setDuration] = useState<number>(0)

  const onRecipeTypeSelected = (type: RecipeType) => setRecipeType(type)
  const open = () => setShown(true)
  const close = () => setShown(false)
  const onValueChange = (value: number | Array<number>) => {
    setDuration(value as number)
  }

  useImperativeHandle(ref, () => ({ open, close }))

  return (
    <Modal
      style={styles.modal} isVisible={isShown}
      onBackdropPress={close}
      onBackButtonPress={close}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      backdropTransitionOutTiming={0}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <H2 style={styles.title}>Add a Filter</H2>
        <CategorySection selected={recipeType} onSelect={onRecipeTypeSelected} inactiveStyle='outlined' />
        <CookingDuration duration={duration} onValueChange={onValueChange} />
        <View style={styles.buttonRow}>
          <Button style={[styles.button]} color={AppTheme.colors.form} labelColor={AppTheme.colors.MainText} title="Cancel" onPress={() => { }} />
          <Button style={styles.button} title="Done" onPress={() => { }} />
        </View>
      </View>
    </Modal>
  )
})

export default FilterModal



