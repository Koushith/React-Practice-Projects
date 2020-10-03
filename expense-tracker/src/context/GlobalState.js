import React, { Children, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// initial state

const initialState = {
  transactions: [
    { id: 1, text: 'floertwer', amount: -20 },
    { id: 2, text: 'flower', amount: -20 },
    { id: 3, text: 'florwrtwer', amount: -20 },
    { id: 4, text: 'florwsger', amount: -20 },
    { id: 5, text: 'flrower', amount: 100 },
  ],
};

// global context
export const GlobalContext = createContext(initialState);

// where ever we want to access the data- wrap this with GlobalContext.Provider - this will take value as props. value will be initial state - and childeren are nothing but the component placed inside this wrapper

export const GlobalProvider = ({ children }) => {
  console.log('CHILDEREN', children);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={state.transactions}>
      {children}
    </GlobalContext.Provider>
  );
};
