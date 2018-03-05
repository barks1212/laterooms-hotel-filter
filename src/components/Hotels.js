import React from 'react';
import hotelList from '../hotel-list.json';
import SearchFilters from './Search-filters';
import Hotel from './Hotel';
import Sort from './Sort';

class Hotels extends React.Component {
  state = {
    hotelList,
    sort: 'ascending',
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
          <Sort sort={this.state.sort} hotelList={this.state.hotelList} />
          {this.state.hotelList.map((hotel, i) => {
            return (
              <section className="" key={i}>
                <Hotel hotel={hotel} />
              </section>
            );
          })}
        </section>
      </section>
    );
  }
}

export default Hotels;