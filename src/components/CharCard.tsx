import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

type CharacterProps = {
  id: string;
  name: string;
  species: string;
  image_src: string;
};

const CharCard: React.FC<CharacterProps> = ({id, name, species, image_src}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image_src}}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.species}>{species}</Text>
      </View>
    </View>
  );
};

export default CharCard;

const styles = StyleSheet.create({
  container: {
    // borderColor: '#db1f1f',
    // borderWidth: 1,
    borderRadius: 10,

    elevation: 2,
    backgroundColor: '#fff',
    width: '85%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 10,
  },

  textContainer: {
    // flexDirection: 'row',
    // backgroundColor: '#114747',
    padding: 8,
  },

  name: {fontSize: 30, color: '#000000'},

  species: {
    fontSize: 22,
    color: '#524f4f',
  },
  image: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
