import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import Rating from './Rating';
const RestaurantDetail = (props) => {
  let { rest } = props;
  return (
    <Card body outline key={rest.id}>
      <Row>
        <Col lg="8" md="8" sm="8" xs="8">
          <Row><h4>{rest.name}</h4></Row>
          <small>
            <Row>
              <Rating rating={rest.rating} /> &nbsp; {rest.review_count} Reviews - {rest.price} - {rest.alias}
            </Row>
            <Row>{rest.display_address}</Row>
            <Row>{rest.is_closed ? "Closed" : "Open"} : {rest.location.display_address.join(' ')}</Row>
          </small>
        </Col>
        <Col lg="4" md="4" sm="4" xs="4">
          <img className="img-fluid" src={rest.image_url} alt={rest.name} />
        </Col>
      </Row>

    </Card>
  )
}

export default RestaurantDetail;