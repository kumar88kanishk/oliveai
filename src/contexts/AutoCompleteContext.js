/*
Maintaing the AutoComplete Address state, classless function accessible through out
*/
import React, { createContext, useState } from 'react';

export const AutoCompleteContext = createContext();

const AutoCompleteContextProvider = (props) => {
  const [ address, setAddress ] = useState('');

  const updateAddress = (address) => {
    setAddress(address);
  }

  return(
    <AutoCompleteContext.Provider value={{ address, updateAddress }}>
      {props.children}
    </AutoCompleteContext.Provider>
  )
}
export default AutoCompleteContextProvider;