import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Series.style';
import axios from 'axios';

const Comics = ({navigation}) => {


  const ComicCard = ({comic, onPress}) => {
    return (
      <TouchableOpacity
        style={styles.card_container}
        onPress={() => onPress(comic)}>
        <Image
          source={{uri: comic.thumbnail.path + '.jpg'}}
          style={styles.card_img}
        />

        <Text numberOfLines={6} style={styles.card_text}>
          {comic.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const URL =
    'https://gateway.marvel.com/v1/public/series?ts=1&apikey=f10953d37850ea4cfdb4f98a0912cd4e&hash=f9acd06a0b64e2acd93d4a4b53145d48&limit=100&offset=0';
  const {loading: loading2, data: data2} = useFetch(URL);

  const handleDetails = comic => {
    navigation.navigate('ComicDetail', {comic});
  };

  const renderItemStarter = ({item}) => (
    <ComicCard comic={item} onPress={handleDetails} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.flat_container}>
        <FlatList
          numColumns={1}
          data={data2}
          renderItem={renderItemStarter}
          key={'_'}
        />
      </View>
    </View>
  );
};

export default Comics;

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get(url).then(response => {
        setData(response.data.data.results);
        console.log(data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      if (error.message != 'Request failed with status code 409') {
        setError(error);
        setLoading(false);
      }
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return {data, loading, error, fetchData};
}
