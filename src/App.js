import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantContextProvider from './contexts/RestaurantContext';
import LocationContextProvider from './contexts/LocationContext';
import { Container, Row } from 'reactstrap';
import GeoMap from './components/GeoMap';
import UseMyLocation from './components/UseMyLocation';
import AutoComplete from './components/AutoComplete';
import AutoCompleteContextProvider from './contexts/AutoCompleteContext';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <Container fluid>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Row>
            <RestaurantList />
            <GeoMap>
              <Row style={{
                position: "absolute",
                width: '80%',
                top: "40px",
                left: "40px",
                zIndex: "2",
              }}>
                <UseMyLocation />
                <AutoCompleteContextProvider>
                  <AutoComplete />
                </AutoCompleteContextProvider>
              </Row>
            </GeoMap>
          </Row>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </Container>
  );
}

export default App;
