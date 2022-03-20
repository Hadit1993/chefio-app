import React from "react";
import { StatusBar } from "react-native";

import AppContainer from "./navigation";
import Splash from "./screens/splash/Splash";


const App = () => {

  return (
    <>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <AppContainer />
    </>
  );
};



export default App;
