// __tests__/Search-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {Search} from '../src/components/Search';

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
