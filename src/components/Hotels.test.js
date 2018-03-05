import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Hotels from './Hotels';

describe('<Hotels>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<Hotels />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can sort hotels based on stars in ascending order', () => {
    const wrapper = mount(<Hotels />);
    const hotels = wrapper.state().hotelList;
    wrapper.find('button').at(1).simulate('click');
    expect(hotels[0].StarRating).toEqual(2);
    expect(hotels[hotels.length - 1].StarRating).toEqual(5);
  });

  it('can sort hotels based on stars in descending order', () => {
    const wrapper = mount(<Hotels />);
    const hotels = wrapper.state().hotelList;
    wrapper.find('button').at(0).simulate('click');
    expect(hotels[0].StarRating).toEqual(5);
    expect(hotels[hotels.length - 1].StarRating).toEqual(2);
  });

  it('filters hotels based on their facilities', () => {
    const wrapper = mount(<Hotels />);
    wrapper.find('input').at(0).simulate('change');
    const facility = wrapper.find('input').at(0).getElement().props.value;
    wrapper.state().hotelList.forEach((hotel) => {
      expect(hotel.Facilities.includes(facility)).toBe(true);
    });
    expect(wrapper.state().hotelList).toHaveLength(5);
    wrapper.find('input').at(1).simulate('change');
    expect(wrapper.state().hotelList).toHaveLength(3);
  });
});