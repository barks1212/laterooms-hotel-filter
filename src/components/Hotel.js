import React from 'react';
import PT from 'prop-types';

const Hotel = (props) => {
  const stars = new Array(props.hotel.StarRating).fill(true).map((element, index) => {
    return <i key={index} className="fa fa-star" id="stars" aria-hidden="true"></i>  
  });

  return (
    <section className="hotels">
      <section className="card is-mobile" id="hotelCard">
        <figure className="image is-128x128">
          <img src={props.hotel.Image} alt="" id="hotelPic" />
        </figure>
        <section className="nameAndRating">
          <h2 className="subtitle has-text-weight-bold is-size-7 is-marginless">{props.hotel.Name}</h2>
          <span className="starRating">{stars}</span>
        </section>
      </section>
      <section className="hotelContent">
        <section className="container is-mobile" id="facilities">
          {props.hotel.Facilities.map((facility, i) => {
            return (
              <p className="facility is-size-6 is-mobile" key={i}>{`${facility[0].toUpperCase()}${facility.substring(1)}`}</p>
            );
          })}
        </section>
      </section>
    </section>
  );
};

Hotel.propTypes = {
  hotel: PT.object.isRequired,
};

export default Hotel;