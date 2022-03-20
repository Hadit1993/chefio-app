

import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { FC, useState } from 'react'
import AppTheme from '../../../assets/theme'
import { H2 } from '../common/AppText'
import { Category, categories } from '../../data/categories'


interface Props {
 defultSelected?: number,
 onSelect: (category: Category) => void
}
const CategorySection: FC<Props> = ({ defultSelected = 1, onSelect }) => {

 const [selectedCategory, setSelectedCategory] = useState(categories.find(cat => cat.id === defultSelected))

 const bgColor = (isSelected: boolean) => isSelected ? AppTheme.colors.Primary : AppTheme.colors.form
 const labelColor = (isSelected: boolean) => isSelected ? 'white' : AppTheme.colors.SecondaryText


 return (
  <>
   <H2>
    Category
   </H2>
   <View style={styles.categoryRow}>
    {categories.map((cat) => (
     <Text onPress={() => {
      onSelect(cat)
      setSelectedCategory(cat)
     }} style={[styles.label, { backgroundColor: bgColor(cat === selectedCategory), color: labelColor(cat === selectedCategory) }]} key={cat.id}>{cat.label}</Text>
    ))}
   </View>
  </>
 )
}

export default CategorySection

const styles = StyleSheet.create({
 categoryRow: {
  flexDirection: 'row',
  marginTop: 16
 },
 label: {
  fontFamily: AppTheme.getFont('Inter-Bold'),
  fontSize: 15,
  lineHeight: 18.15,
  letterSpacing: 0.7,
  paddingHorizontal: 24,
  paddingVertical: 15,
  height: 48,
  borderRadius: 32,
  marginRight: 10
 }
})