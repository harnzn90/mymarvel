import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Btn from '../../components/Btn/Btn';
import auth from '@react-native-firebase/auth';
import styles from './Home.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toptabnavi from '../TopTab/Toptabnavi/Toptabnavi';

const Home = ({navigation}) => {
  const handleLogout = () => {
    auth().signOut();
    navigation.navigate('Login');
  };

  const width1 = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
        <View style={{position: 'absolute', justifyContent: 'flex-end'}}>
          <Btn title={'Logout'} onPress={handleLogout} width={150} />
        </View>
      <View style={styles.header_container}>
        <Image
          style={{
            height: 280,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://ares.shiftdelete.net/2021/09/marvel-izleme-sirasi-hangi-sirayla-izlenmeli.jpg',
          }}
        />
      </View>
      <View style={styles.flat_container}>
        <Toptabnavi />
      </View>
    </SafeAreaView>
  );
};

export default Home;
