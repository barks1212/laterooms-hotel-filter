import React from 'react';
import PT from 'prop-types';

class SearchFilters extends React.Component {
  render() {
    const facilities = Object.keys(this.props.filters)
    return (
      <section className="filters is-fluid">
        <section className="container is-fluid is-mobile" id="filterContainer">
          {facilities.map((facility, i) => {
            return <label className="checkbox" id="checkboxes" key={i}>
              <input type="checkbox" value={facility} onChange={this.checkHandler} />
              <span className="is-size-7">{`${facility.slice(0, 1).toUpperCase()}${facility.substring(1)}`}</span>

            </label>;
          })}
        </section>
      </section>
    );
  }

  checkHandler = (event) => {
    this.props.hotelFilter(event.target.value);
  }

}

SearchFilters.propTypes = {
  filters: PT.object.isRequired,
  hotelFilter: PT.func
};

export default SearchFilters;