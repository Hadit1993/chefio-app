import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';

const AUTH = 'auth'
const MAIN = 'main'

const Stack = createNativeStackNavigator();

const AppContainer = () => (<NavigationContainer>
 <Stack.Navigator initialRouteName={MAIN} screenOptions={{
  headerShown: false,
 }}>
  <Stack.Screen name={AUTH} component={AuthStack} />
  <Stack.Screen name={MAIN} component={MainTab} />
 </Stack.Navigator>

</NavigationContainer>)

export default AppContainer

