import React, {useState, useContext} from "react";
import {View, Text, TextInput} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({route, navigation}) => {
  
  const {id} = route.params;
  const postId = id.id
  const {state, editBlogPost} = useContext(Context);

  const blogPost = state.find(val => val.id === id.id)


  return(
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}} 
      onSubmit={(title, content) => {
        editBlogPost(postId, title, content, () => navigation.pop())
      }}
    />
  )
}


export default EditScreen;