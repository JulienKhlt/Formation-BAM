import React from 'react';
import renderer from 'react-test-renderer';
import {cocktails} from '../helpers/cocktailData';
import {CocktailItem} from '../src/components/CocktailItem';
import {cocktail} from '../types';

test('mojito renders correctly', () => {
  const mojito: cocktail = cocktails[1];
  const cocktailitem = renderer
    .create(<CocktailItem cocktail={mojito} />)
    .toJSON();
  expect(cocktailitem).toMatchSnapshot();
});
