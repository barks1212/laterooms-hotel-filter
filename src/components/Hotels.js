import React from 'react';
import hotelList from '../hotel-list.json';
import SearchFilters from './Search-filters';
import Hotel from './Hotel';

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
  render() {
    return (
      <section className="mainBody">
        <SearchFilters filters={this.state.filters} />
        <section className="mainBodyHotels">
          {this.state.hotelList.map((hotel, i) => {
            return (
              <Hotel hotel={hotel} key={i} />
            );
          })}
        </section>
      </section>
    );
  }
}

export default Hotels;