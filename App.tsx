import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CharactersScreen from './src/screens/CharactersScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import ProfileChar from './src/screens/ProfileChar';
import World from './src/screens/World';
import Icon from 'react-native-vector-icons/Feather';
import Main from './src/screens/tinder/Main';

export type AppStackParamList = {
  Home: undefined;
  Login: undefined;
  Characters: undefined;
  Notifications: undefined;
  Profile: {name: string};
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tinder"
        component={Main}
        options={{
          tabBarLabel: 'Tinder',
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CharList"
        component={CharactersScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="1"
        component={ProfileChar}
        options={{
          tabBarLabel: 'Char Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="2"
        component={World}
        options={{
          tabBarLabel: 'Worlds',
          tabBarIcon: ({color, size}) => (
            <Icon name="globe" size={size} color={color} />
          ),
          tabBarBadge: 5,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<AppStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true, gestureEnabled: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Characters"
          component={MyTabs}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
