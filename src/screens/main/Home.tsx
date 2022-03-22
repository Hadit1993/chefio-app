
import { FlatList, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper'
import TextField from '../../components/common/TextField'
import { mainIcons } from '../../../assets/icons'
import CategorySection from '../../components/main/home/CategorySection'
import { recipes } from '../../data/recipes'
import RecipeComponent from '../../components/main/home/RecipeComponent'
import SearchModal, { ModalRef } from '../../modals/main/SearchModal'
import styles from '../../styles/screens/main/home.style'
import Divider from '../../components/main/Divider'
import { RecipeType } from '../../data/categories'

const Home = () => {
  const searchModal = useRef<ModalRef>(null)
  const [recipeType, setRecipeType] = useState<RecipeType>('All')

  const onRecipeTypeSelected = (type: RecipeType) => setRecipeType(type)
  const openModal = () => searchModal.current?.open()

  return (
    <ScreenWrapper>
      <View style={styles.filterSection}>
        <TouchableWithoutFeedback onPress={openModal}>
          <View>
            <TextField
              editable={false}
              placeholder='Search'
              containerStyle={styles.searchInputContainer}
              leftIcon={mainIcons.search}
            />
          </View>
        </TouchableWithoutFeedback>
        <CategorySection
          selected={recipeType}
          onSelect={onRecipeTypeSelected} />
      </View>
      <Divider />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<RecipeComponent {...item} />)}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      <SearchModal ref={searchModal} onSearch={(query) => { }} />
    </ScreenWrapper>
  )
}
export default Home

export const ItemSeparatorComponent = () => <View style={styles.itemSeparatorComponent} />

