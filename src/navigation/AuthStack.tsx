import React from "react";

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Onboarding from "../screens/onboarding/Onboarding";
import Signin from "../screens/auth/Signin";
import Signup from "../screens/auth/Signup";
import { useNavigation } from "@react-navigation/native";
import VerificationCode from "../screens/auth/VerificationCode";

export const ON_BOARDING = 'onboarding'
export const SIGNIN = 'signin'
export const SIGNUP = 'signup'
export const VERIFICATION_CODE = 'verificationCode'


interface AuthParamList extends Record<string, undefined> {
 [ON_BOARDING]: undefined,
 [SIGNIN]: undefined,
 [SIGNUP]: undefined,
 [VERIFICATION_CODE]: undefined
}

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthStack = () => (<Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
 <Stack.Screen name={ON_BOARDING} component={Onboarding} options={{ headerShown: false }} />
 <Stack.Screen name={SIGNIN} component={Signin} options={{ headerShown: false }} />
 <Stack.Screen name={SIGNUP} component={Signup} options={{ headerShown: false }} />
 <Stack.Screen name={VERIFICATION_CODE} component={VerificationCode} options={{ headerShown: false }} />
</Stack.Navigator>)


export const useAuthNavigation = () => useNavigation<NativeStackNavigationProp<AuthParamList>>()

export default AuthStack