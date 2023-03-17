import {ButtonMain} from '../components/ButtonMain';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {AppStackParamList} from '../../App';
import {useState} from 'react';
import {TextField} from '../components/TextField';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async () => {
    if (email == '' || password == '') return;

    const body = {
      email,
      password,
    };
    // console.log(body);
    var data = new FormData();
    data.append('email', email);
    data.append('password', password);
    // const res = await
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        res.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error(error);
      });

    // const data = await res.json();
    // console.log(data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Login</Text>
          <TextField
            placeholder="example@mail.com"
            onChange={e => setEmail(e)}
            label={'Email'}
          />
          <TextField
            placeholder="*******"
            onChange={e => setPassword(e)}
            label={'Password'}
            secureTextEntry
          />
        </View>
        <ButtonMain text="Sign in" onPress={handleOnSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    alignSelf: 'flex-start',
    // marginLeft: 50,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: '#6d6c6c',
  },

  inputContainer: {
    width: '100%',
    padding: 30,
  },

  button: {
    textAlign: 'center',
    width: 100,
    padding: 15,
    borderRadius: 30,
  },
});
