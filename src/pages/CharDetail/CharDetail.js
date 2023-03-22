import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './CharDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';



const CharDetail = ({route, navigation}) => {
  const {char} = route.params;

  const handleback = () => {
    navigation.goBack();
  };

  const comicUrl = `${char.comics.collectionURI}?ts=1&apikey=f10953d37850ea4cfdb4f98a0912cd4e&hash=f9acd06a0b64e2acd93d4a4b53145d48`;
  const seriesUrl = `${char.series.collectionURI}?ts=1&apikey=f10953d37850ea4cfdb4f98a0912cd4e&hash=f9acd06a0b64e2acd93d4a4b53145d48`;


  const {data, loading, error} = useFetch(comicUrl);
  const {data2, loading2, error2} = useFetch2(seriesUrl);

  const renderComics = ({item}) => (
    <CharacterComicCard comic={item} onPress={handleDetail} />
  );
  const renderSeries = ({item}) => (
    <CharacterSeriesCard series={item} onPress={handleDetail} />
  );

  const handleDetail = comic => {
    navigation.navigate('ComicDetail', {comic});
  };

  const CharacterComicCard = ({comic,onPress}) => {
    return (
      <TouchableOpacity
      onPress={()=>{onPress(comic)}}
        style={styles.card_container}>
        <Image
          source={{uri: comic.thumbnail.path + '.jpg'}}
          style={styles.card_img}
        />

        <Text numberOfLines={1} style={styles.card_text}>
          {comic.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const CharacterSeriesCard = ({series,onPress}) => {
    return (
      <TouchableOpacity
      onPress={()=>{onPress(series)}}
        style={styles.card_container}>
        <Image
          source={{uri: series.thumbnail.path + '.jpg'}}
          style={styles.card_img}
        />

        <Text numberOfLines={1} style={styles.card_text}>
          {series.title}
        </Text>
      </TouchableOpacity>
    );
  };



  console.log(route.params);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection:"row",
          width:540,
          
        }}>
        <Icon
          name="arrow-left-circle"
          size={80}
          color="black"
          onPress={handleback}
        />
         <Icon name="heart" color="red" size={60}/>
        
      
      </View>
      <Image
        source={{
          uri: char.thumbnail.path + '.jpg',
        }}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'cover',
          alignSelf: 'center',
          borderRadius: 20,
        }}
      />
     
      <View style={{flexDirection:"row",alignItems:"center"}}>
      
      <Text numberOfLines={5} style={styles.text_name}>
        {char.name}
        {char.title}
      </Text>
      </View>
      <ScrollView>
        <Text style={styles.text_desc}>{char.description}</Text>
      </ScrollView>
      <ScrollView>

      <View style={styles.comic_container}>
        <Text style={{fontSize:30,fontWeight:"bold"}}>ComicS</Text>
        <FlatList horizontal data={data} renderItem={renderComics} />
        
      </View>
      <View style={styles.comic_container}>
        <Text style={{fontSize:30,fontWeight:"bold"}}>SerieS</Text>
        <FlatList horizontal data={data2} renderItem={renderSeries} />
        
      </View>
      </ScrollView>
    </View>
  );
};

export default CharDetail;

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
function useFetch2(url) {
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState();
  const [data2, setData2] = useState([]);
  const fetchData2 = async () => {
    try {
      await axios.get(url).then(response => {
        setData2(response.data.data.results);
        console.log(data2);
        setLoading2(false);
      });
    } catch (error) {
      console.log(error.message);
      if (error.message != 'Request failed with status code 409') {
        setError2(error);
        setLoading2(false);
      }
      console.log(error.message);
      setLoading2(false);
    }
  };
  useEffect(() => {
    fetchData2();
  }, [url]);
  return {data2, loading2, error2, fetchData2};
}
