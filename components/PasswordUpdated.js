import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {width , height} from '../constants'

const PasswordUpdated = ({date}) => {
  return (
    <View style={styles.container}>
        <View style={styles.bellIcon}>

        </View>
        <View style={styles.textContainer}>
            <Text styles={styles.title}>Password Updated</Text>
            <Text styles={styles.pragrafStyle}>lorem ipsium e confirm your exact location before we sent your package</Text>
            <Text styles={styles.dateUpdated}>{date}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row-reverse'
    },  
    bellIcon:{
        backgroundColor:'red',
        width:70,
        height:80
    },
    title:{
        fontSize:12,
        lineHeight:15,
        display:'flex',
        alignItems:'center'
    },
    dateUpdated:{
        marginTop:14,
        fontSize:10,
        lineHeight:13,
        
    }
})

export default PasswordUpdated