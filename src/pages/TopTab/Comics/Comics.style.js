import {StyleSheet, Dimensions} from 'react-native';

const size = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightsteelblue',
    flex: 1,
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
    resizeMode: 'center',
  },
  card_container: {
    width: size.width - 20,
    height: size.width / 2 - 20,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:30,
    justifyContent:"space-between",
    flexDirection:"row"
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
