import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { LocationContext } from '../contexts/LocationContext';
import { Col } from 'reactstrap';

const Marker = ({ text, lat, lng }) => {
  return (
    <div>
      <i className=" fa fa-map-marker fa-5" style={{ "fontSize": "3.5em" }} aria-hidden="true"></i>
      {text}
    </div>
  )
};


const GeoMap = (props) => {
  const { restaurants } = useContext(RestaurantContext)
  const { location, updateLocation } = useContext(LocationContext)
  const _onClick = ({x, y, lat, lng, event}) => updateLocation({ latitude: lat, longitude: lng})

  return (
    <Col md="9" lg="9" xs="12" sm="9">
      {props.children}
      <div style={{ height: '60%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDAQOhuvUriLPgDzVblnSSH7BUj-s2EMSw' }}
          defaultZoom={14}
          center={{ lat: location.latitude, lng: location.longitude }}
          onClick={_onClick}
        >
          {restaurants.map((rest,i) => {
            return <Marker
              lat={rest.coordinates.latitude}
              lng={rest.coordinates.longitude}
              text={rest.name}
              key={i}
            />
          })}

        </GoogleMapReact>
      </div>
    </Col>

  );
}

export default GeoMap;