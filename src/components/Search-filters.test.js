import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import SearchFilters from './Search-filters';

describe('<SearchFilters>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<SearchFilters filters={{temp: false}} filterHotels={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});