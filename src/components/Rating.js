import React from 'react';

const Rating = (props) => {
  var stars = [];
  for(var i = 1; i <= 5; i++) {
    if (props.rating >= i) {
      stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
    } else {
      stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>)
    }
  }
  return(
    <span className="">
      {stars}
    </span>
  )
}
export default Rating;