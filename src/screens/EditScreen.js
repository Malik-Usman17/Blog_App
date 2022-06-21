import React, {useState, useContext} from "react";
import {View, Text, TextInput} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({route}) => {
  
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find(val => val.id === id.id)

  // const data = state.filter(val => val.id == id)

  // const [title, setTitle] = useState(blogPost.title);
  // const [content, setContent] = useState(blogPost.content);

  return(
    <BlogPostForm />
  )
}


export default EditScreen;