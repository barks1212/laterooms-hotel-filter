import React from 'react';
import PT from 'prop-types';

class SearchFilters extends React.Component {
  render() {
    const facilities1 = Object.keys(this.props.filters).slice(0, Object.keys(this.props.filters).length / 2);
    const facilities2 = Object.keys(this.props.filters).slice(Object.keys(this.props.filters).length / 2);
    return (
      <section className="filters">
        <section className="columns is-mobile is-gapless">
          <section className="column is-one-half" id="columnOne">
            {facilities1.map((facility, i) => {
              return <label className="checkbox" id="checkboxLeft" key={i}>
                <input type="checkbox" value={facility} />
                <span className="is-size-7">{`${facility.slice(0, 1).toUpperCase()}${facility.substring(1)}`}</span>

              </label>;
            })}
          </section>
          <section className="column is-one-half" id="columnTwo">
            {facilities2.map((facility, i) => {
              return <label className="checkbox" id="checkboxRight" key={i}>
                <input type="checkbox" value={facility} />
                <span className="is-size-7">{`${facility.slice(0, 1).toUpperCase()}${facility.substring(1)}`}</span>
              </label>;
            })}
          </section>
        </section>
      </section>
    );
  }
}

SearchFilters.propTypes = {
  filters: PT.object.isRequired,
  hotelFilter: PT.func.isRequired
};

export default SearchFilters;