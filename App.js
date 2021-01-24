import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainScreeen from './Screens/Main';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import {createSwitchNavigator} from "react-navigation";


export default function App() {
  return (
    <View style={styles.container}>
      
    
    <AppContainer/>

    </View>
  );
}

var AppNavigator = createSwitchNavigator({

  MainScreeen:MainScreeen
})

const AppContainer = createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
