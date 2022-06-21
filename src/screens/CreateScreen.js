import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';



const CreateScreen = ({navigation, route}) => {

  const {addBlogPost} = useContext(Context);

  return(
    <BlogPostForm 
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('IndexScreen'))
      }}
    />
    // <View>
      
    //   <Text style={styles.label}>Enter Title:</Text>
      
    //   <TextInput 
    //     style={styles.input} 
    //     value={title} 
    //     onChangeText={setTitle}
    //   />

    //   <Text style={styles.label}>Enter Content:</Text>

    //   <TextInput 
    //     style={styles.input} 
    //     value={content} 
    //     onChangeText={setContent}
    //   />

    //   <Button 
    //     title='Add your blog'
    //     onPress={() => {
    //       addBlogPost(title, content, () => {
    //         navigation.navigate('IndexScreen')
    //       })
    //     }}
    //   />
    
    // </View>
  )
}


const styles = StyleSheet.create({
  input:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 5,
    margin: 5
  },
  label:{
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default CreateScreen;