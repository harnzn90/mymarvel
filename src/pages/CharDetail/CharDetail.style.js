import {Dimensions, StyleSheet} from 'react-native';

const size = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: 'lightsteelblue',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text_name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text_desc: {
    fontSize: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  comic_container:{
   borderRadius:20,
   marginVertical:10,
    backgroundColor:"azure",
  },
  card_container: {
    width: size.width / 2 - 20,
    height: size.width / 2 - 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:30,
  },
  card_text: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  card_img: {
    width: size.width / 2 - 60,
    height: size.width / 2 - 60,
    borderRadius:30,
  },
});
