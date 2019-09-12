/*
Maintaing the Location state, classless function accessible through out
*/

import React, { useState, createContext } from 'react';


export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [ location, setLocation ] = useState({
    latitude: 40.7127753,
    longitude: -74.0059728
  })
  // updatet the location state
  const updateLocation = ({latitude, longitude}) => {
    setLocation({ latitude, longitude })
  }
  
  const myLocation = () => {
    // using browser Navigator API get location of the user
    navigator.geolocation.getCurrentPosition(function(position) {
      updateLocation({
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      });
    });
  }

  return(
    <LocationContext.Provider value={{ location, updateLocation, myLocation }}>
      {props.children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;