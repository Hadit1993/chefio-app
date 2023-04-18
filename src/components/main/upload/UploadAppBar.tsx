import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { UploadParamList } from "../../../navigation/UploadStack";
import styles from '../../../styles/screens/main/uploadFisrtStep.style'
import { H2 } from "../../common/AppText";

interface Props {
 currentStep: number,
 navigation: NativeStackNavigationProp<UploadParamList, string>,
 addPadding?: boolean
}


const UploadAppBar = (props: Props) => <View style={[styles.appBar, props.addPadding && { paddingHorizontal: 24, paddingTop: 12 }]}>
 <TouchableOpacity onPress={() => props.navigation.goBack()}>
  <H2 style={styles.cancel}>Cancel</H2>
 </TouchableOpacity>
 <H2>{props.currentStep}/2</H2>
</View>

export default UploadAppBar

