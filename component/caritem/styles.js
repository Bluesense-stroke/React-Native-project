import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carcontainer: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    
      },
      titles: {
        marginTop:"30%",
        width:'100%',
        alignItems:'center',
    
      },
      title:{
        fontSize: 45,
        fontWeight:'500'
    
    
      },
      subtitleCTA:{
        textDecorationLine:'underline'

      },
      subtitle:{
        fontSize:16,
        color:"#5c5e62"
    
    
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttonContainer:{
        position:'absolute',
        bottom: 50,
        width:'100%',
        
      }



});

export default styles;