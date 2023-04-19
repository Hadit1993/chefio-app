import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import Onboarding from "../screens/onboarding/Onboarding";
import Signin from "../screens/auth/Signin";
import Signup from "../screens/auth/Signup";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import VerificationCode from "../screens/auth/VerificationCode";
import PasswordRecovery from "../screens/auth/PasswordRecovery";
import ResetPassword from "../screens/auth/ResetPassword";
import {
  ON_BOARDING,
  SIGNIN,
  SIGNUP,
  VERIFICATION_CODE,
  PASSWORD_RECOVERY,
  RESET_PASSWORD,
} from "./routes";

interface AuthParamList extends ParamListBase {
  [ON_BOARDING]: undefined;
  [SIGNIN]: undefined;
  [SIGNUP]: undefined;
  [VERIFICATION_CODE]?: { passwordRecovery: boolean };
  [PASSWORD_RECOVERY]: undefined;
  [RESET_PASSWORD]: undefined;
}

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ animation: "slide_from_bottom", headerShown: false }}
  >
    <Stack.Screen
      name={ON_BOARDING}
      component={Onboarding}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={SIGNIN}
      component={Signin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={SIGNUP}
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={VERIFICATION_CODE}
      component={VerificationCode}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={PASSWORD_RECOVERY}
      component={PasswordRecovery}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RESET_PASSWORD}
      component={ResetPassword}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthParamList>>();
export type VerificationCodeRouteProp = RouteProp<
  AuthParamList,
  "verificationCode"
>;

export default AuthStack;
