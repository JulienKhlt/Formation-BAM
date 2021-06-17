import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {cocktail} from '../../types';

interface cocktail_container {
  cocktail: cocktail;
}

export const CocktailItem = (props: cocktail_container) => {
  const cocktail: cocktail = props.cocktail;
  return (
    <View style={styles.main_container}>
      <Image style={styles.image} source={{uri: 'image'}} />
      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <Text style={styles.title_text}>{cocktail.strDrink}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>
            {cocktail.strInstructions}
          </Text>
        </View>
        <View style={styles.tag_container}>
          <Text style={styles.tag_text} numberOfLines={1}>
            {cocktail.strTags.replace(/,/g, ', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
  },
  image: {
    width: 140,
    height: 180,
    margin: 5,
    backgroundColor: 'gray',
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  description_container: {
    flex: 10,
    alignItems: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  tag_container: {
    flex: 3,
  },
  tag_text: {
    textAlign: 'right',
    fontSize: 14,
  },
});
