import { View, Text,  StyleSheet, Image, Button} from 'react-native'
import React from 'react'

// import { 
//   TextButton
//  } from "../components";
 import { 
  images, width,height
  } from "../constants";


const Login = ({navigation : {push}}) => {
  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.backgroundStyle}/>
      <Button title="go to Notification" onPress={()=>push('Notification')}/>
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
    width: width,
    height:height,
    position:'absolute',
    
  }
})
export default Login