import {View, Text,FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import CharCard from '../../../components/CharCard/CharCard';
import styles from './Chars.style';
import axios from 'axios';


const Chars = ({navigation}) => {


  const URL ="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f10953d37850ea4cfdb4f98a0912cd4e&hash=f9acd06a0b64e2acd93d4a4b53145d48&limit=100&offset=0"
  const {loading: loading2, data: data2} = useFetch(URL);

const handleDetails =(char)=>{
  navigation.navigate('CharDetail',{char})
}

  const renderItemStarter = ({item}) => <CharCard char={item} onPress={handleDetails}/>

  return (
    <View style={styles.container}>
     <View style={styles.flat_container}> 

        <FlatList numColumns={2} data={data2} renderItem={renderItemStarter} key={'_'} />
     </View>
      
      
    </View>
  );
};

export default Chars;

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
