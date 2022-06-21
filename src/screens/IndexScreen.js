import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';


const IndexScreen = ({navigation}) => {


  const {state, deleteBlogPost} = useContext(Context);


  const RenderComponent = ({item}) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
      <View style={styles.row}>
        
        <Text style={styles.title}>{item.title} - {item.id}</Text>
        
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather style={styles.icon} name='trash'/>
        </TouchableOpacity>
      
      </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
    
      
      <FlatList 
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={RenderComponent}
      />
    </View>
  )
}

// IndexScreen.navigationOptions = () => {
//   return {
//     headerRight: <Feather name='plus' size={30}/>
//   }
// }

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderColor: 'gray',
    borderTopWidth: 1,
    paddingHorizontal: 10
  },
  title:{
    fontSize: 18,
    color: 'black'
  },
  icon:{
    fontSize: 24,
    color: 'black'
  }
})


export default IndexScreen;