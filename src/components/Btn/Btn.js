import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Btn = ({title, onPress,width}) => {
  return (
    <View >

    <TouchableOpacity
      onPress={onPress}
      style={{
          backgroundColor: 'lightgray',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius:20,
          padding:15,
          width:width,
          margin:10,
          alignItems:"center"
          
        }}>
      <Text style={{fontSize:30, fontWeight:"bold"}}>{title}</Text>
    </TouchableOpacity>
          </View>
  );
};

export default Btn;
