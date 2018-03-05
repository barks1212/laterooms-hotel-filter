import React from 'react';
import PT from 'prop-types';

const Sort = (props) => (
  <section className="sort is-paddingless is-marginless">
    <span className="is-paddingless has-text-weight-bold"> Sort by </span>
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton">Descending</button>
    |
    <button className="button is-small is-paddingless is-marginless is-text" id="sortButton" >Ascending</button>
  </section>
);

Sort.propTypes = {
  sort: PT.string.isRequired,
  hotelList: PT.array.isRequired
};

export default Sort;