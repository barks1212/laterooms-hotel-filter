import React from 'react';
import hotelList from '../hotel-list.json';
import SearchFilters from './Search-filters';

class Hotels extends React.Component {
  state = {
    hotelList,
    filters: {
      bar: false,
      gym: false,
      spa: false,
      pool: false,
      restaurant: false,
      'car park': false,
      'full board': false,
      'half board': false
    }
  }
  render () {
    return (
      <section className="mainBody">
        <SearchFilters filters={this.state.filters} />
      </section>
    );
  }
}

export default Hotels;