import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import Hotel from './Hotel';

describe('<Hotel>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const hotel = {
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
    };
    const tree = renderer.create(<Hotel hotel={hotel} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});