import React from 'react';
import { ViewBase,Text,ImageBackground,View,Pressable } from 'react-native';
import styles from './styles'


const StyledButton = (props) => {


  const type = props.type;

  const content = props.content;
  const onpress=props.onpress;
  
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textcolor = type === 'primary' ? '#FFFFFF' : '#171A20' ;




  return (

    <View style={styles.container}> 
        <Pressable 
        style={[styles.button , {backgroundColor: backgroundColor}]}
        onPress={() => 
        onpress()}
        >
            <Text style={[styles.text,{color:textcolor}]}>{content}</Text>
        </Pressable>
    </View>


  );
};

export default StyledButton;