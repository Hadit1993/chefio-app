import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from '../../../styles/modals/main/searchModal.style'
import { H2 } from "../../common/AppText";


const SearchSuggestionSection: FC<{ suggestions: string[], onSelect: (label: string) => void }> = (props) => (<>
 <H2 style={styles.searchSuggestion}>Search suggestions</H2>
 <View style={styles.suggestionContainer}>
  {props.suggestions.map((suggest) => <TouchableOpacity key={suggest} onPress={() => props.onSelect(suggest)}
   style={styles.suggestionChip}>
   <Text style={styles.suggestionLabel}>{suggest}</Text>
  </TouchableOpacity>)}

 </View>
</>)

export default SearchSuggestionSection