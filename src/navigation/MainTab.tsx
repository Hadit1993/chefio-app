import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppTheme from "../../assets/theme";
import Home from "../screens/main/Home";

import Scan from "../screens/main/Scan";
import Notification from "../screens/main/Notification";
import Profile from "../screens/main/Profile";
import styles from '../styles/components//common/tabBar.style'
import TabBarItem from "../components/main/TabBarItem";
import { HOME, UPLOAD, SCAN, NOTIFICATION, PROFILE } from "./routes";
import UploadStack from "./UploadStack";

const Tab = createBottomTabNavigator();



const MainTab = () =>
(<Tab.Navigator screenOptions={({ route, navigation }) => ({
  tabBarIcon: ({ color }) => (
    <TabBarItem
      route={route.name}
      navigation={navigation}
      color={color} />),
  tabBarActiveTintColor: AppTheme.colors.Primary,
  tabBarInactiveTintColor: AppTheme.colors.SecondaryText,
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarShowLabel: false,
})}>

  <Tab.Screen name={HOME} component={Home} />
  <Tab.Screen name={UPLOAD} component={UploadStack} options={{ tabBarStyle: { display: 'none' } }} />
  <Tab.Screen name={SCAN} component={Scan} listeners={{
    tabPress: (event) => {
      event.preventDefault()
    }
  }} options={{ tabBarStyle: { display: 'none' } }} />
  <Tab.Screen name={NOTIFICATION} component={Notification} />
  <Tab.Screen name={PROFILE} component={Profile} />

</Tab.Navigator>)



export default MainTab


