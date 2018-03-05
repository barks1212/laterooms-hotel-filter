import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import renderer from 'react-test-renderer';
import Hotels from './Hotels';

describe('<Hotels>', () => {
  it('renders as expected without crashing and matches snapshot', () => {
    const tree = renderer.create(<Hotels />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});