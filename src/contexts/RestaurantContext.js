/*
Maintaing the Restaurant state, classless function accessible through out
*/

import React, { createContext, useState } from 'react';


export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const [ restaurants, setRestaurants ] = useState([]);

  const updateRestaurantList = (restaurants) => {
    setRestaurants(restaurants)
  }
  return (
    <RestaurantContext.Provider value={{ restaurants, updateRestaurantList }}>
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider;