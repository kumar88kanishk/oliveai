import React, { useContext } from 'react';
import { LocationContext } from '../contexts/LocationContext';
import { Col, Button } from 'reactstrap';
const UseMyLocation = () => {
  const { myLocation } = useContext(LocationContext)
  return (
    <Col md="2" lg="2" sm="2" xs="2 " >
      <Button onClick={() => myLocation() }>Use my location</Button>
    </Col>
    
  );
}
 
export default UseMyLocation;