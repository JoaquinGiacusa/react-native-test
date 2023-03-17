import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

type CharacterProps = {
  id: string;
  name: string;
  species: string;
  image_src: string;
};

const CharCard: React.FC<CharacterProps> = ({id, name, species, image_src}) => {
  console.log(image_src);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.species}>{species}</Text>
      <Image style={styles.image} source={{uri: image_src}}></Image>
    </View>
  );
};

export default CharCard;

const styles = StyleSheet.create({
  container: {},
  name: {},
  species: {},
  image: {
    height: 100,
    width: 100,
  },
});
