import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CharactersScreen from './src/screens/CharactersScreen';

export type AppStackParamList = {
  Home: undefined;
  Login: undefined;
  Characters: undefined;
  Notifications: undefined;
  Profile: {name: string};
  Settings: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
