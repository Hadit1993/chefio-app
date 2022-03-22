

import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { FC } from 'react'
import { Recipe } from '../../../data/recipes'
import { H2, Small } from '../../common/AppText'
import { mainImages } from '../../../../assets/images'
import AppTheme from '../../../../assets/theme'

const RecipeComponent: FC<Recipe> = (props) => {
 return (
  <View>
   <View style={styles.row}>
    <Image source={props.owner.avatar} style={styles.avatar} />
    <Small>{props.owner.name}</Small>
   </View>
   <View style={styles.imageContainer}>
    <Image source={props.image} style={styles.image} />
    <TouchableWithoutFeedback>
     <View style={styles.likeContainer}>

      <Image source={mainImages.heart} style={styles.like} />
     </View>
    </TouchableWithoutFeedback>
   </View>
   <H2>{props.name}</H2>
   <Small style={styles.description}>{`${props.type} • ${props.time} mins`}</Small>

  </View>
 )
}

export default RecipeComponent

const styles = StyleSheet.create({
 row: {
  flexDirection: 'row',
  alignItems: 'center'
 },
 avatar: {
  width: 31,
  height: 31,
  borderRadius: 11,
  marginRight: 8
 },

 imageContainer: {
  width: 151,
  height: 151,
  marginVertical: 16
 },

 image: {
  width: '100%',
  height: '100%',
  borderRadius: 16,
 },
 likeContainer: {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  width: 32,
  height: 32,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: 16,
  top: 16
 },
 like: {
  width: 20,
  height: 20
 },
 description: {
  marginTop: 8,
  color: AppTheme.colors.SecondaryText
 },

})