import React from 'react';
import {View, TextInput, Button} from 'react-native';

export const Search = () => {
  return (
    <View>
      <TextInput placeholder="Titre du cocktail" />
      <Button title="Rechercher" onPress={() => {}} />
    </View>
  );
};
