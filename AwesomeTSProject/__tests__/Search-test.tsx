// __tests__/Search-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {Search} from '../src/components/Search';

test('search renders correctly', () => {
  const search = renderer.create(<Search />).toJSON();
  expect(search).toMatchSnapshot();
});
