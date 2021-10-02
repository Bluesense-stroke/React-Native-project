import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Caritem from '../caritem'

import styles from './styles'
import cars from './cars'

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
      data = {cars}
      renderItem = {({item}) => <Caritem car={item} />}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};

export default CarsList;
