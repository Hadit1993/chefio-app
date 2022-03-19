

import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

import styles from '../../styles/components/common/tabBar.style'
import { bottomTabIcons } from '../../../assets/icons'

import { HOME, NOTIFICATION, PROFILE, SCAN, UPLOAD } from '../../navigation/MainTab'

type MenuData = { icon: ImageSourcePropType, label: string }

const menuMapping: Record<string, MenuData> = {
 [HOME]: { icon: bottomTabIcons.home, label: 'Home' },
 [UPLOAD]: { icon: bottomTabIcons.edit, label: 'Upload' },
 [SCAN]: { icon: bottomTabIcons.scan, label: 'Scan' },
 [NOTIFICATION]: { icon: bottomTabIcons.notification, label: 'Notification' },
 [PROFILE]: { icon: bottomTabIcons.profile, label: 'Profile' },
}

type Props = {
 route: string,
 navigation: any,
 color: string
}

const TabBarItem: FC<Props> = ({ route, navigation, color }) => {
 return (
  <View style={styles.tabBarItem}>
   {route === SCAN ? (
    <View style={styles.scanContainer}>
     <TouchableOpacity style={styles.ScanButton} onPress={() => navigation.navigate(SCAN)}>
      <Image style={styles.icon} source={bottomTabIcons.scan} />
     </TouchableOpacity>

     <Text style={[styles.label, { color, marginTop: 20 }]}>{menuMapping[route].label}</Text>

    </View>) : (
    <>
     <Image source={menuMapping[route].icon} style={[styles.icon, { tintColor: color }]} />
     <Text style={[styles.label, { color }]}>{menuMapping[route].label}</Text>
    </>
   )}

  </View>
 )
}

export default TabBarItem

