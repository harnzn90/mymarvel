import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input/Input';
import Btn from '../../components/Btn/Btn';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn=()=>{

    auth().createUserWithEmailAndPassword(email,password);
    navigation.navigate("Login")
  }
  

  return (
    <View
      style={{
        backgroundColor: 'lightsteelblue',
        alignItems: 'center',
        flex: 1,
      }}>
      <Input placeholder={'E Mail'} onChangeText={text => setEmail(text)} />
      <Input
        placeholder={'PassWord'}
        onChangeText={text => setPassword(text)}
      />
      <Btn title={'Sign Up'} onPress={signIn} width={150} />
    </View>
  );
};

export default Signup;
