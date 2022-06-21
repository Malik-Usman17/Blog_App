import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';


const ScreenHeaderIcon = () => {

  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
      <Feather name='plus' size={30}/>
    </TouchableOpacity>
  )  
}


export default ScreenHeaderIcon;