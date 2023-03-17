import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppStackParamList} from '../../App';
import {ButtonMain} from '../components/ButtonMain';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <ButtonMain
          text="Go to login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <ButtonMain
          text="Characters List"
          onPress={() => {
            navigation.navigate('Characters');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe2df',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    gap: 10,
  },
  title: {
    top: -40,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
