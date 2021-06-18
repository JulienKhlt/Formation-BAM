import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

import {cocktails} from '../../helpers/cocktailData';
import {CocktailItem} from './CocktailItem';
import {cocktail} from '../../types';
import {getCocktailsFromApiWithSearchedText} from '../../API/cocktailDB';

export const Search = () => {
  const [_cocktails, set_cocktails] = useState<cocktail[]>([]);
  const searched_text = useRef<string>('');

  const _loadCocktails = async (text: string) => {
    if (searched_text.current.length > 0) {
      const drinks = await getCocktailsFromApiWithSearchedText(text);
      console.log(drinks);

      set_cocktails(drinks);
    }
  };

  const _searchedTextInputChanged = (text: string) => {
    searched_text.current = text;
  };

  return (
    <View>
      <TextInput
        style={styles.textinput}
        accessibilityLabel="cocktail input"
        placeholder="Titre du cocktail"
        onChangeText={text => _searchedTextInputChanged(text)}
      />
      <Button
        style={styles.textinput}
        title="Rechercher"
        onPress={() => {
          _loadCocktails(searched_text.current);
        }}
      />
      <FlatList
        data={_cocktails}
        keyExtractor={item => item.idDrink.toString()}
        renderItem={({item}) => <CocktailItem cocktail={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});
