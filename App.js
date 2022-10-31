import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen from './screens/GetStartedScreen'
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{header:()=> null}}/>
        <Stack.Screen name="Login" component={Login} options={{header:()=> null}}/>
        <Stack.Screen name="Register" component={Register} options={{header:()=> null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  


});
