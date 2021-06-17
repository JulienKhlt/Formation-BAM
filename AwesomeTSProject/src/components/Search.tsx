import React from 'react';
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

export const Search = () => {
  return (
    <View>
      <TextInput style={styles.textinput} placeholder="Titre du cocktail" />
      <Button style={styles.textinput} title="Rechercher" onPress={() => {}} />
      <FlatList
        data={cocktails}
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
