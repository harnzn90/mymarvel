import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './ComicDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ComicDetail = ({route, navigation}) => {
  const {comic} = route.params;

  const handleback = () => {
    navigation.goBack();
  };

  console.log(route.params);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-left-circle"
          size={80}
          color="black"
          onPress={handleback}
        />
      </View>
      <Image
        source={{
          uri: comic.thumbnail.path + '.jpg',
        }}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'cover',
          alignSelf: 'center',
          borderRadius: 20,
        }}
      />
      <Text numberOfLines={5} style={styles.text_name}>
        {comic.title}
      </Text>
      <ScrollView>
        <Text style={styles.text_desc}>{comic.description}</Text>
      </ScrollView>
    </View>
  );
};

export default ComicDetail;
