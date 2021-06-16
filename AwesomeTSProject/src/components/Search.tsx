import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export const Search = () => {
  return (
    <View>
      <TextInput style={styles.textinput} placeholder="Titre du cocktail" />
      <Button style={styles.textinput} title="Rechercher" onPress={() => {}} />
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
