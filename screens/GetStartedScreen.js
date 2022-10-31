import { View, Text,TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { StyleSheet, Image } from 'react-native'
import {images} from '../constants'



const GetStartedScreen = ({navigation : {push}}) => {
  return (
    <View style={styles.container}>
      <Image source={images.bannerList1} style={styles.imageBannerStyle}/>
      <TouchableOpacity style={styles.buttonGetStarted} onPress={() => push('Login')}>
        
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end'
  },
  buttonGetStarted:{
    // marginTop:'70%',
    borderRadius:40,
    backgroundColor:'#E43A5E',
    width:314,
    height:80,
    justifyContent:'center', 
    alignItems:'center'
  },
  button:{
    fontFamily:'Mulish'
  },
  imageBannerStyle:{
    position: 'absolute',
    justifyContent:'flex-start'


  }
});


export default GetStartedScreen