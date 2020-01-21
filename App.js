import React, { Component } from 'react';
import { Alert } from "react-native";
//StackNavigator for creatign nested routes
import { AppRegistry, StyleSheet, Text, View  } from 'react-navigation';
import {createStackNavigator} from 'react-native-stack'



const API_KEY = ""; 
//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
  //Define your screens.
  Home: { screen: Home },
  PokeList: { screen: PokeList },
  Pokemon: {screen: Pokemon }
},
{
  initialRouteName:  'Home'
})
