import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './Sort';

describe('<Sort>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const hotels = [
      {
        Name: 'Yacht Harbour',
        StarRating: 5,
        Facilities: [
          'car park',
          'spa',
          'pool',
          'gym',
          'full board',
          'bar',
          'restaurant'
        ],
        Image: 'https://s-ec.bstatic.com/images/hotel/max1024x768/308/30801707.jpg'
      },
      {
        Name: 'The Adriana',
        StarRating: 3,
        Facilities: [
          'car park',
          'pool',
          'bar',
          'half board'
        ],
        'Image': 'https://t-ec.bstatic.com/images/hotel/max1024x768/259/25947064.jpg'
      },
    ];


    const tree = renderer.create(<Sort sort={{ temp: false }} hotelList={hotels} sorter={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});