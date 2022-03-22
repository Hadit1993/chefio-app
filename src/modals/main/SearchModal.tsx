
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, forwardRef, useImperativeHandle, useRef, useState } from 'react'
import ScreenWrapper from '../../components/common/ScreenWrapper';
import homeStyles from '../../styles/screens/main/home.style';
import AppTheme from '../../../assets/theme';
import TextField from '../../components/common/TextField';
import { mainIcons } from '../../../assets/icons';
import Divider from '../../components/main/Divider';
import { H2, P1 } from '../../components/common/AppText';
import { searchHistory, searchSuggestion } from '../../data/search';
import FilterModal from './FilterModal';
import styles from '../../styles/modals/main/searchModal.style'
import SearchHistory from '../../components/main/home/SearchHistory';
import SearchSuggestionSection from '../../components/main/home/SearchSuggestion';

export interface ModalRef {
 open: () => void;
 close: () => void
}

interface Props {
 onSearch: (query: string) => void
}

const SearchModal = forwardRef<ModalRef, Props>((props, ref) => {

 const [isShown, setShown] = useState(false)
 const [query, setQuery] = useState<string>()
 const filterModal = useRef<ModalRef>(null)
 const onQueryChanged = (text: string) => setQuery(text)
 const open = () => setShown(true)
 const close = () => setShown(false)
 useImperativeHandle(ref, () => ({ open, close }))
 const showClearButton = query && query.length
 const clearQuery = () => setQuery(undefined)
 const onHistorySelect = (label: string) => {
  props.onSearch(label)
  close()
 }

 const openFilterModal = () => {
  filterModal.current?.open()
 }


 return (
  <Modal visible={isShown}
   onRequestClose={close}
   animationType='fade'>
   <ScreenWrapper>
    <View style={[homeStyles.filterSection, styles.searchContainer]}>
     <TouchableOpacity onPress={close}>
      <Image style={AppTheme.iconStyle} source={mainIcons.arrowLeft} />
     </TouchableOpacity>
     <TextField
      value={query}
      autoFocus
      onChangeText={onQueryChanged}
      disableFocusEffect
      placeholder='Search'
      containerStyle={styles.searchInputContainer}
      rightIcon={showClearButton ? mainIcons.close : undefined}
      rightIconOnPress={clearQuery}
      leftIcon={mainIcons.search}
     />
     <TouchableOpacity onPress={openFilterModal}>
      <Image style={AppTheme.iconStyle} source={mainIcons.filter} />
     </TouchableOpacity>
    </View>
    <Divider />
    <ScrollView keyboardShouldPersistTaps='handled'>
     <View style={styles.scrolChild}>
      {searchHistory.map(history => (
       <SearchHistory
        key={history}
        label={history}
        onSelect={onHistorySelect}
       />))}
      <Divider marginVertical={24} />
      <SearchSuggestionSection
       suggestions={searchSuggestion}
       onSelect={onHistorySelect} />

     </View>
    </ScrollView>

    <FilterModal ref={filterModal} />

   </ScreenWrapper>
  </Modal>
 )
})






export default SearchModal

