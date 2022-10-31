import React from 'react'
import {View, Image} from 'react-native'

function ImageMenu(props) {
  return (
    <View>
        <Image source={props.menuImage} />
    </View>
  )
}

export default ImageMenu
