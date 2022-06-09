import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
//import { BlogProvider } from "./src/context/BlogContext";
import { Provider } from "./src/context/BlogContext";


const {Screen, Navigator} = createNativeStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Navigator initialRouteName="IndexScreen" screenOptions={{headerShown: true, title: 'Blogs'}}>
        <Screen name={'IndexScreen'} component={IndexScreen}/>
      </Navigator>
    </NavigationContainer>
  )
}


//export default App;

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  )
}