
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

import styles from '../../styles/components/common/tabBar.style'
import { bottomTabIcons } from '../../../assets/icons'
import { HOME, UPLOAD, SCAN, NOTIFICATION, PROFILE } from '../../navigation/routes'



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
     <TouchableOpacity style={styles.ScanButton} onPress={() => navigation.navigate(route)}>
      <Image style={styles.icon} source={menuMapping[route].icon} />
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

