import React, { FC } from "react";
import { TouchableOpacity, Image } from "react-native";
import { mainIcons } from "../../../../assets/icons";
import AppTheme from "../../../../assets/theme";
import styles from '../../../styles/modals/main/searchModal.style'
import { P1 } from "../../common/AppText";

const SearchHistory: FC<{ label: string, onSelect: (label: string) => void }> = (props) => (<TouchableOpacity style={styles.history} onPress={() => props.onSelect(props.label)}>
 <Image source={mainIcons.timeCircle} style={AppTheme.iconStyle} />
 <P1 style={styles.historyLabel}>{props.label}</P1>
 <Image source={mainIcons.arrowUpward} style={AppTheme.iconStyle} />
</TouchableOpacity>)

export default SearchHistory