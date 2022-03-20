

import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import AppTheme from '../../../assets/theme'
import TextField from '../../components/common/TextField'
import { mainIcons } from '../../../assets/icons'
import CategorySection from '../../components/main/CategorySection'
import { recipes } from '../../data/recipes'
import Recipe from '../../components/main/Recipe'

const Home = () => {
 return (
  <ScreenWrapper>

   <View style={styles.filterSection}>
    <TextField
     editable={false}
     placeholder='Search'
     containerStyle={styles.searchInputContainer}
     leftIcon={mainIcons.search}
    />
    <CategorySection onSelect={(category) => { }} />
   </View>
   <View style={styles.divider} />



   <FlatList

    contentContainerStyle={styles.contentContainerStyle}
    data={recipes}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (<Recipe {...item} />)}
    numColumns={2}
    columnWrapperStyle={styles.columnWrapperStyle}
    ItemSeparatorComponent={ItemSeparatorComponent}
   />




  </ScreenWrapper>
 )
}
export default Home

const ItemSeparatorComponent = () => <View style={styles.itemSeparatorComponent} />

const styles = StyleSheet.create({
 filterSection: {
  paddingHorizontal: 24,
  paddingTop: 16, paddingBottom: 24
 },
 searchInputContainer: {
  marginTop: 16,
  backgroundColor: AppTheme.colors.form,
  borderWidth: 0,
  marginBottom: 24
 },

 divider: {
  width: '100%',
  height: 8,
  backgroundColor: AppTheme.colors.form,

 },



 contentContainerStyle: {
  padding: 24
 },
 columnWrapperStyle: {
  justifyContent: 'space-between',
 },
 itemSeparatorComponent: { height: 32 }




})