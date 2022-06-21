import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';


const ShowScreenHeaderIcon = ({onPress}) => {

  const navigation = useNavigation()

  return(
    <TouchableOpacity
      style={{backgroundColor: 'white', alignItems: 'flex-end', padding: 10}}
      onPress={onPress} 
    >
      <FontAwesome name='pencil' size={30} color='black'/>
    </TouchableOpacity>
  ) 
}


export default ShowScreenHeaderIcon;