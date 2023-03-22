import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import auth from '@react-native-firebase/auth';
import Btn from '../../components/Btn/Btn';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function handleMain(){
    navigation.navigate('Main');
}


  const handleLogin = async () => {
    if (email == "" || password == "") {
      showMessage({
        message: 'Eksik Bilgi',
        type: 'warning',
      });
      return
    }
else{

    try {
        await auth().signInWithEmailAndPassword(email, password);

        const user = auth().currentUser.email.split('@', 1).toString();

        console.log(user);
        showMessage({
            message: 'Merhaba ' + user,
            type: 'info',
        });
        handleMain();
        
    } catch (err) {
        showMessage({
            message: err.message,
            type: 'danger',
        });
        console.log(err.message);
    }
}
};

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png',
          }}
          style={{height: 240, width: 500, resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.input_container}>
        <Input placeholder={'E Mail'} onChangeText={text => setEmail(text)} />
        <Input
          placeholder={'Password'}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.btn_container}>
        <Btn title={'Login'} onPress={() => handleLogin()} width={150} />
        <Btn
          title={'Sign Up'}
          onPress={() => navigation.navigate('Signup')}
          width={150}
        />
      </View>
    </View>
  );
};

export default Login;
