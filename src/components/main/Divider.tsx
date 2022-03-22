import React, { FC } from "react";
import { View } from "react-native";
import homeStyles from "../../styles/screens/main/home.style";


interface Props {
 marginTop?: number,
 marginBottom?: number,
 marginVertical?: number


}

const Divider: FC<Props> = (props) => <View style={[homeStyles.divider, { ...props }]} />

export default Divider