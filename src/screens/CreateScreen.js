import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
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