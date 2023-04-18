import React from "react";
import { StatusBar } from "react-native";

import AppContainer from "./navigation";
import Splash from "./screens/splash/Splash";
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <AppContainer />
      </>
    </GestureHandlerRootView>
  );
};



export default App;
