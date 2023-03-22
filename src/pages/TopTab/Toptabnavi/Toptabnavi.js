import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Comics from '../Comics/Comics';
import Chars from '../Chars/Chars';
import Events from '../Events/Events';
import Series from '../Series/Series';

const Toptabnavi = () => {
  const Toptabnavi = createMaterialTopTabNavigator();

  return (
    <Toptabnavi.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'red'},
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold', color: 'white'},
        tabBarIndicatorStyle: {backgroundColor: 'lightsteelblue'},
      }}>
      <Toptabnavi.Screen name="Chars" component={Chars} />
      <Toptabnavi.Screen name="Comics" component={Comics} />
      <Toptabnavi.Screen name="Events" component={Events} />
      <Toptabnavi.Screen name="Series" component={Series} />
    </Toptabnavi.Navigator>
  );
};

export default Toptabnavi;
