/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './components/Login/Login.js';


type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
      
      <Login/>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent:'center'
  }
});
