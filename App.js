import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "./src/context/BlogContext";
import ScreenStack from "./src/navigation/ScreenStack";
import React from "react";


const App = () => {

  return(
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  )
}


export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  )
}