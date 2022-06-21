import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
  switch(action.type){

    case 'delete_blogpost':
      return state.filter((val) => val.id !== action.payload);
    
    case 'add_blogpost':
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
          //title: `Blog Post #${state.length + 1}`
        }
      ]
    
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title: title, content: content}});
    callback()
  }
}

//if we are integrate api then do this
// const addBlogPost = (dispatch) => {
//   return async (title, content, callback) => {
//     try{
//       await axios.post('url', title, content)
//       dispatch({type: 'add_blogpost', payload: {title: title, content: content}});
//     callback()
//     }
//     catch(error){

//     }
//   }
// }


const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id})  //type and id these naming convention, u can also use anyother name 
  }
}


export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [{title: 'TEST POST', content: 'Test Content', id: 1}]
  //[]  //initial State
);
