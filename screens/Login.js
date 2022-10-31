import { View, Text,  StyleSheet, Image} from 'react-native'
import React from 'react'

// import { 
//   TextButton
//  } from "../components";
 import { 
  images
  } from "../constants";


const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.backgroundStyle}/>

      <Image
        source={images.logo}
        style={{
          alignSelf: 'center',
          marginTop: 20,
          width: 95,
          height: 22
        }}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end'
      
  },
  backgroundStyle:{
    resizeMode:'cover'
  }
})
export default Login