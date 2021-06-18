import axios from 'axios';
import {cocktail} from '../types';

const cocktaildb = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export const getCocktailsFromApiWithSearchedText = async (
  text: string,
): Promise<cocktail[]> => {
  const url = '/search.php?s=' + text;

  try {
    const result = await cocktaildb.get(url);
    return result.data.drinks;
  } catch (error) {
    console.error(error);
    return [];
  }
  // return fetch(url)
  //   .then(response =>
  //     response.json().then(data => {
  //       return data.drinks;
  //     }),
  //   )
  //   .catch(error => console.error(error));
};
