import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Input from './src/components/Input/Input';
import Btn from './src/components/Btn/Btn';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/pages/signup/Signup';
import Login from './src/pages/login/Login';
import Home from './src/pages/Home/Home';
import Fav from './src/pages/Fav/Fav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashMessage from 'react-native-flash-message';
import CharDetail from './src/pages/CharDetail/CharDetail';
import ComicDetail from './src/pages/ComicDetail/ComicDetail';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {height: 100},
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Fav') {
            iconName = focused ? 'star' : 'star-outline';
          }

          return <Icon name={iconName} size={60} color={color} />;
        },
        tabBarActiveTintColor: 'firebrick',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CharDetail" component={CharDetail}/>
        <Stack.Screen name="ComicDetail" component={ComicDetail}/>
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
