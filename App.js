import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import StarMapScreen from './screens/StarMap';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import DailyPicScreen from './screens/DailyPic';

const Stack=createStackNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="StarMap" component={StarMapScreen}/>
          <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
          <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}