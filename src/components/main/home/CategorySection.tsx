

import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { FC, useState } from 'react'
import AppTheme from '../../../../assets/theme'
import { H2 } from '../../common/AppText'
import { RecipeType, recipetypes } from '../../../data/categories'


interface Props {
  selected?: RecipeType,
  onSelect: (type: RecipeType) => void,
  inactiveStyle?: 'filled' | 'outlined'
}
const CategorySection: FC<Props> = ({ selected = 'All', onSelect, inactiveStyle = 'filled' }) => {

  const bgColor = (isSelected: boolean) => {
    if (isSelected) return AppTheme.colors.Primary
    else if (inactiveStyle === 'outlined') return 'transparent'
    else return AppTheme.colors.form
  }
  const labelColor = (isSelected: boolean) => isSelected ? 'white' : AppTheme.colors.SecondaryText

  const borderWidth = (isSelected: boolean) => isSelected || inactiveStyle === 'filled' ? 0 : 2


  return (
    <>
      <H2>
        Category
      </H2>
      <View style={styles.categoryRow}>
        {

          recipetypes.map((type) => (
            <Text onPress={() => {
              onSelect(type)

            }} style={[styles.label,
            {
              backgroundColor: bgColor(type === selected),
              color: labelColor(type === selected),
              borderWidth: borderWidth(type === selected)
            }]}
              key={type}>{type}</Text>
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
    marginRight: 10,
    borderColor: AppTheme.colors.Outline
  },


})