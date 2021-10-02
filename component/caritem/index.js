import React from 'react';
import { ViewBase,Text,ImageBackground,View } from 'react-native';
import styles from './styles'
import StyledButton from '../styledbutton';


const Caritem = (props) => {

  const {name, tagline , image, taglineCTA } = props.car;




  return (
    <View style={styles.carcontainer}>
      <ImageBackground 
      source={image}
      style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
        type='primary'
        content={"Custom Order"}
        onpress={() => {
          console.warn('Custom Order was pressed');

        }}
        />

        <StyledButton
        type='secondary'
        content={"Existing inventory"}
        onpress={() => {
          console.warn('Existing inventory was pressed');

        }}
        />

      </View>

      
    </View>

    
  );
};

export default Caritem;