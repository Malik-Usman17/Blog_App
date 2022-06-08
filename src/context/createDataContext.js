import React, {createContext, useReducer} from 'react';


export default (reducer, actions, initialState) => {
  
  const Context = createContext({children});

  const Provider = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider 
      //value={{state: state}}
      value={{state}}  //also do that
    >   
      {children}
    </Context.Provider>
  }

  return {Context, Provider}
}