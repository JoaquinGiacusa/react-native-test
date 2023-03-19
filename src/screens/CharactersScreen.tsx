import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import CharCard from '../components/CharCard';
import {useEffect, useState} from 'react';

type Characters = {
  info: {
    count: string;
    pages: string;
    next: string;
    prev: string;
  };
  results: {
    id: string;
    name: string;
    species: string;
    image: string;
  }[];
};

const CharactersScreen = () => {
  const [characters, setCharacters] = useState<Characters | null>();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },

      body: JSON.stringify({
        query: `query {
          characters {
            info{
              count
              pages
              next
              prev
            }
            results {
              id
              name
              species
              image
            }
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setCharacters(data.data.characters);
      });
  }, []);

  return (
    <View>
      {characters && (
        <FlatList
          style={styles.container}
          data={characters?.results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CharCard
              key={item.id}
              id={item.id}
              name={item.name}
              species={item.species}
              image_src={item.image}
            />
          )}
        />
      )}
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
