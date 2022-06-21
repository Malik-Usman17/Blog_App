import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ScreenHeaderIcon from "../components/ScreenHeaderIcon";
import CreateScreen from "../screens/CreateScreen";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import ShowScreenHeaderIcon from "../components/ShowScreenHeaderIcon";
import EditScreen from "../screens/EditScreen";


const {Screen, Navigator} = createNativeStackNavigator();

const ScreenStack = ({route}) => {

  const navigation = useNavigation();

  return(
    <Navigator initialRouteName="IndexScreen" screenOptions={{headerShown: true, title: 'Blogs'}}>
        <Screen 
          name={'IndexScreen'} 
          component={IndexScreen}
          options={{headerRight: () => <ScreenHeaderIcon />}}
        />

        <Screen name={'EditScreen'} component={EditScreen}/>
        
        <Screen 
          name={'ShowScreen'} 
          component={ShowScreen}
          options={{
          //   headerRight: ({route}) => <ShowScreenHeaderIcon onPress={() => {
          // }} />,
          header: ({route}) => <ShowScreenHeaderIcon 
                                onPress={() => {
                                  // console.log(route.params)
                                  navigation.navigate('EditScreen', {id: route.params})}}/>}}
        />
        <Screen name={'CreateScreen'} component={CreateScreen}/>
        
      </Navigator>
  )
}


export default ScreenStack;