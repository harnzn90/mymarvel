import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CharCard.style';

const CharCard = ({char,onPress}) => {



  return (
    
      <TouchableOpacity style={styles.card_container} onPress={()=>onPress(char)}>

        <Image
          source={{uri: char.thumbnail.path + '.jpg'}}
          style={styles.card_img}/>
       

      <Text numberOfLines={1} style={styles.card_text}>{char.name}</Text>
          </TouchableOpacity>
    
  );
};

export default CharCard;
