import { View, Text,TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { StyleSheet, Image } from 'react-native'
import {images, width, height} from '../constants'



const GetStartedScreen = ({navigation : {push}}) => {
  return (
    <View style={styles.container}>
      <Image source={images.bannerList1} style={styles.imageBannerStyle}/>
      <View style={styles.textContainer}>
        <Text style={styles.textTitie}>Monitor all your investment anytime anywhere</Text>
        <Text style={styles.textParagraf}>Monitor all your investments anytime, anywhere. With this App, you can keep track of your current and future portfolio of startups all in one place.
      </Text>
      </View>
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

    flexDirection:'column',
    justifyContent:'space-around'    
  },
  buttonGetStarted:{
    borderRadius:40,
    backgroundColor:'#E43A5E',
    width:314,
    height:80,
    justifyContent:'center', 
    alignItems:'center'
  },
  textContainer:{
    justifyContent:'center',
    alignItems:'center',

    width:width/1.5
  },
  textTitie:{
    fontSize:20,
    textAlign:'center', 
    lineHeight:24,
    color:'#364C4F',
  },
  textParagraf:{
    color:'#364C4F',
    textAlign:'center',
    fontSize:12,
    lineHeight:16
  }

});


export default GetStartedScreen