import React, { useContext, useEffect, useState } from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import RestaurantDetail from './RestaurantDetail';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { LocationContext } from '../contexts/LocationContext';
import RestaurantApi from '../services/RestaurantApi';
import { queryString } from '../helpers/util';
import { AppSwitch } from '@coreui/react';

const RestaurantList = (props) => {
  const { restaurants, updateRestaurantList } = useContext(RestaurantContext)
  const { location } = useContext(LocationContext);
  const [areaLocation, setAreaLocation] = useState({})

  const query = location => {
    return queryString({
      term: 'restaurant',
      longitude: location.longitude,
      latitude: location.latitude,
      radius: 10000
    })
  };

  const fetchRestaurants = async () => {
    setAreaLocation(location);
    const response = await RestaurantApi.get(`/businesses/search${query(location)}`)
    updateRestaurantList(response.data.businesses)
  };

  // Call When location changes; 
  if (areaLocation !== location) fetchRestaurants();

  useEffect(() => {
    setAreaLocation(location)
  }, [location]);

  const restaurantContent = () => restaurants.map((rest, index) => <RestaurantDetail rest={rest} key={index} />);

  const noRestaurant = () => 
    <React.Fragment>
      <h1 className='text-white'> No Restaurant Found</h1>
      <p> Oops, ask YELP!</p>
    </React.Fragment>;

  return (
    <Col xs="12" lg="3" md="3" sm="3">
      <Card className=" bg-warning">
        <CardHeader>
          <div className="card-header-actions  text-center text-white">
            Map View
            <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'} />
          </div>
        </CardHeader>
        <CardBody>
          <blockquote className="card-bodyquote">
            {restaurants.length ? restaurantContent() : noRestaurant()}
          </blockquote>
        </CardBody>
      </Card>

    </Col>
  );
}

export default RestaurantList;