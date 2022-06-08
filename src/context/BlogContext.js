import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
  }



 
  return (
  <BlogContext.Provider 
    //value={{data: blogPosts, addBlogPost: addBlogPost}}
    value={{data: blogPosts, addBlogPost}}  //or you can also do that if you same name key and value
  >
    {children}
  </BlogContext.Provider>
  )
}


export default BlogContext;
