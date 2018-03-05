import React from 'react';
import PT from 'prop-types';

const Hotel = (props) => {
  const stars = new Array(props.hotel.StarRating).fill(true).map((element, index) => {
    return <i key={index} className="fa fa-star" id="stars" aria-hidden="true"></i>;
  });
  const facs = props.hotel.Facilities;
  const facilities1 = facs.slice(0, facs.length / 2);
  const facilities2 = facs.slice(facs.length / 2);

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
      <section className="columns is-mobile" id="hotelContent">
        <section className="column is-half-desktop" id="facilitiesLeft">
          {facilities1.map((facility, i) => {
            return (
              <p className="facility facility is-size-7-mobile" key={i}>{`${facility[0].toUpperCase()}${facility.substring(1)}`}</p>
            );
          })}
        </section>
        <section className="column is-half-desktop" id="facilitiesRight">
          {facilities2.map((facility, i) => {
            return (
              <p className="facility is-size-7-mobile" key={i}>{`${facility[0].toUpperCase()}${facility.substring(1)}`}</p>
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