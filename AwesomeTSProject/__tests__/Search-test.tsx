// __tests__/Search-test.js
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Search} from '../src/components/Search';

const nock = require('nock');

const scope = nock('https://www.thecocktaildb.com')
  .get('/api/json/v1/1/search.php?s=mojito')
  .reply(200, {
    drinks: [
      {
        idDrink: '11000',
        strDrink: 'Mojito',
        strDrinkAlternate: null,
        strTags:
          'IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild',
        strVideo: null,
        strCategory: 'Cocktail',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions:
          'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
        strInstructionsES: null,
        strInstructionsDE:
          'Minzblätter mit Zucker und Limettensaft verrühren. Füge einen Spritzer Sodawasser hinzu und fülle das Glas mit gebrochenem Eis. Den Rum eingießen und mit Sodawasser übergießen. Garnieren und mit einem Strohhalm servieren.',
        strInstructionsFR: null,
        strInstructionsIT:
          'Pestare le foglie di menta con lo zucchero e il succo di lime.\r\nAggiungere una spruzzata di acqua di seltz e riempi il bicchiere con ghiaccio tritato.\r\nVersare il rum e riempire con acqua di seltz.\r\nGuarnire con una fetta di lime, servire con una cannuccia.',
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
        strIngredient1: 'Light rum',
        strIngredient2: 'Lime',
        strIngredient3: 'Sugar',
        strIngredient4: 'Mint',
        strIngredient5: 'Soda water',
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: '2-3 oz ',
        strMeasure2: 'Juice of 1 ',
        strMeasure3: '2 tsp ',
        strMeasure4: '2-4 ',
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource:
          'https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/',
        strImageAttribution:
          'anilaha https://pixabay.com/users/anilaha-16242978/',
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2016-11-04 09:17:09',
      },
      {
        idDrink: '15841',
        strDrink: 'Mojito Extra',
        strDrinkAlternate: null,
        strTags: null,
        strVideo: null,
        strCategory: 'Cocktail',
        strIBA: null,
        strAlcoholic: 'Alcoholic',
        strGlass: 'Collins glass',
        strInstructions:
          'Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.',
        strInstructionsES: null,
        strInstructionsDE:
          'Minze mit Zitronensaft in ein Glas geben, Minze mit einem Löffel zerdrücken. Eis und Rum hinzufügen und mit Soda auffüllen. Krönen Sie es mit Angostura.',
        strInstructionsFR: null,
        strInstructionsIT:
          'Metti la menta con il succo di limone in un bicchiere, schiaccia la menta con un cucchiaio, ghiaccio, rum e riempila con la soda.\r\nCompletalo con Angostura.',
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg',
        strIngredient1: 'Mint',
        strIngredient2: 'Lemon juice',
        strIngredient3: 'Dark rum',
        strIngredient4: 'Club soda',
        strIngredient5: 'Angostura bitters',
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: '1/2 handful ',
        strMeasure2: '3 cl ',
        strMeasure3: '1/8 L Jamaican ',
        strMeasure4: '1/8 L ',
        strMeasure5: '8 drops ',
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2016-11-04 09:24:43',
      },
      {
        idDrink: '178336',
        strDrink: 'Blueberry Mojito',
        strDrinkAlternate: null,
        strTags: null,
        strVideo: null,
        strCategory: 'Cocktail',
        strIBA: null,
        strAlcoholic: 'Alcoholic',
        strGlass: 'Highball glass',
        strInstructions:
          'Muddle the blueberries with the other ingredients and serve in a highball glass. Garnish with mint and a half slice of lime.',
        strInstructionsES: null,
        strInstructionsDE: null,
        strInstructionsFR: null,
        strInstructionsIT:
          'Pestare i mirtilli con gli altri ingredienti e servire in un bicchiere highball. Guarnire con la menta e mezza fetta di lime.',
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/07iep51598719977.jpg',
        strIngredient1: 'Dark Rum',
        strIngredient2: 'Lime Juice',
        strIngredient3: 'Sugar',
        strIngredient4: 'Blueberries',
        strIngredient5: 'Lemon-lime soda',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: '2 shots',
        strMeasure2: '1 shot',
        strMeasure3: 'Dash',
        strMeasure4: 'Whole',
        strMeasure5: 'Top',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: 'No',
        dateModified: null,
      },
    ],
  });

test.only('search renders correctly', async () => {
  const screen = render(<Search />);

  const cocktailInputs = screen.getByA11yLabel('cocktail input');

  fireEvent.changeText(cocktailInputs, 'mojito');
  fireEvent.press(screen.getByText('Rechercher'));

  await waitFor(() => screen.getByText('Mojito'));
  expect(screen).toMatchSnapshot();
});
