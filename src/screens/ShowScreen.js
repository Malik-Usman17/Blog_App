import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import { Context } from '../context/BlogContext';



const ShowScreen = ({navigation, route}) => {

  const {state} = useContext(Context);

  const {id} = route.params;

  const blogPosts = state.find(item => item.id === id)

  return(
    <View>
      <Text>{blogPosts.title}</Text>
      <Text>{blogPosts.content}</Text>
    </View>
  )
}


export default ShowScreen;