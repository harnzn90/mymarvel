import {Dimensions, StyleSheet} from 'react-native';

const size = Dimensions.get('window');

export default StyleSheet.create({
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
