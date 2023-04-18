import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  ParamListBase,
  useNavigation,

} from "@react-navigation/native";
import { UPLOAD_FIRST_STEP, UPLOAD_SECOND_STEP } from "./routes";
import UploadFirstStep from "../screens/main/upload/UploadFirstStep";
import UploadSecondStep from "../screens/main/upload/UploadSecondStep";

export interface UploadParamList extends ParamListBase {
  [UPLOAD_FIRST_STEP]: undefined;
  [UPLOAD_SECOND_STEP]: undefined;
}

const Stack = createNativeStackNavigator<UploadParamList>();

const UploadStack = () => (
  <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
    <Stack.Screen
      name={UPLOAD_FIRST_STEP}
      component={UploadFirstStep}
      options={{ headerShown: false }} />
    <Stack.Screen
      name={UPLOAD_SECOND_STEP}
      component={UploadSecondStep}
      options={{ headerShown: false }} />
  </Stack.Navigator>
)

export const useUploadNavigation = () => useNavigation<NativeStackNavigationProp<UploadParamList>>()

export default UploadStack


