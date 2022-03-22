import React, { FC } from "react"
import { View, Text } from "react-native"
import AppTheme from "../../../../assets/theme"
import { recipetimes } from "../../../data/categories"
import styles from '../../../styles/modals/main/filterModal.style'
import { H2, P1 } from "../../common/AppText"
import { Slider } from '@miblanchard/react-native-slider';

interface Props { duration: number, onValueChange: (value: number | Array<number>) => void }

const CookingDuration: FC<Props> = ({ duration, onValueChange }) => {

 const durationColor = (value: number) => duration >= value ? AppTheme.colors.Primary : AppTheme.colors.SecondaryText

 return <>
  <H2 style={styles.cookingDuration}>Cooking Duration <P1 style={styles.inMinutes}>(in minutes)</P1></H2>
  <View style={styles.sliderContainer}>
   <View style={styles.durationRow}>
    {recipetimes.map((time, index) => (<Text key={time} style={[styles.durationLabel, { color: durationColor(index) }]}>{time}</Text>))}
   </View>
   <Slider
    value={duration}
    maximumValue={2}
    step={1}
    onValueChange={onValueChange}
    trackStyle={styles.trackStyle}
    minimumTrackTintColor={AppTheme.colors.Primary}
    thumbStyle={styles.thumbStyle}
   />
  </View>
 </>
}

export default CookingDuration