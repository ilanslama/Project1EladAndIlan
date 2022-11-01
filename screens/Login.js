import { View, Text,  StyleSheet, Image} from 'react-native'
import React, {useState} from 'react'


//import {MotiView, useAnimationState} from "moti";
//import { Shadow } from "react-native-shadow-2";
// import { 
//   TextButton
//  } from "../components";
 import { 
  images
  } from "../constants";



const Login = () => {
  const [mode, setMode] = React.useState("signIn")
  const animationState = useState({
    signIn: {
      height: "50%"
    },
    signUp:{
      height: "50%"
    }
  })

  function renderSignIn(){
    
  }
  function renderSignUp(){
    
  }
  function renderAuthComtainer(){
    if(mode == "signIn"){
      return renderSignIn()
    }
    else{
      return renderSignUp()
    }
  }
  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.backgroundStyle}/>

      {/*  logo  */}
      <Image
        source={images.logo}
        style={{
          alignSelf: 'center',
          marginTop: 20,
          width: 95,
          height: 22
        }}/>

        {/*  Auth container  */}
        <View>
          {renderAuthComtainer()}


        </View>
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
    flex: 1,
    resizeMode:'stretch',
    
  },
  authContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    borderRadius: "5%"
  }
})

export default Login