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
        <SearchFilters filters={this.state.filters} hotelFilter={this.hotelFilter}/>
        <section className="mainBodyHotels">
          <Sort sort={this.state.sort} sorter={this.sorter} hotelList={this.state.hotelList} />
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

  sorter = (order, hotels) => {
    this.setState({ sort: order });

    if (order === 'ascending') {
      let ascendingHotels = hotels.sort((a, b) => {
        return a.StarRating - b.StarRating;
      });
      this.setState({ hotelList: ascendingHotels });
    }

    if (order === 'descending') {
      let descendingHotels = hotels.sort((a, b) => {
        return b.StarRating - a.StarRating;
      });
      this.setState({ hotelList: descendingHotels });
    }
  }

  hotelFilter = (fac /*filters*/) => {
    let newFilters = Object.assign(this.state.filters, { [fac]: !this.state.filters[fac] });
    this.setState({ filters: newFilters });
    
    let checkedChecker = [];
    for (let key in this.state.filters) {
      if (this.state.filters[key]) checkedChecker.push(key);
    }

    let newHotelList = hotelList.filter((hotel) => {
      return checkedChecker.every((facility) => {
        return hotel.Facilities.includes(facility);
      });
    });
    return this.sorter(this.state.sort, newHotelList);
  }

}

export default Hotels;
