import React, { FC, useEffect, useRef, useState } from "react"
import { LayoutAnimation, View, Image } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { mainIcons } from "../../../../assets/icons"
import AppTheme from "../../../../assets/theme"
import TextField, { InputProps } from "../../common/TextField"
import LottieView from 'lottie-react-native';
import deleteAnim from '../../../../assets/lottie/delete_anim.json'
import styles from '../../../styles/screens/main/uploadSecondStep.style'
import useSwipe from "../../../utils/hooks/useSwipe"

const SwipeabTextField: FC<InputProps & { onSwiped: () => void }> = (props) => {
 const { isCollapsed, collapse, OnBegan, lottie } = useSwipe(props.onSwiped)
 if (isCollapsed) return <></>
 return <Swipeable
  containerStyle={{ marginTop: 24 }}
  onSwipeableOpen={collapse}
  onBegan={OnBegan}
  renderLeftActions={() => <View style={styles.swiperAction}>
   <LottieView ref={lottie} style={styles.lottieView} source={deleteAnim} loop={false} />
  </View>}
 >
  <View style={styles.inputRow}>
   <Image style={AppTheme.iconStyle} source={mainIcons.drag} />
   <TextField {...props} />
  </View>
 </Swipeable>

}

export default SwipeabTextField

