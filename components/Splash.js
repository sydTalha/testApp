import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image} from 'react-native';


export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="#000"/>
        <Image 
            source={require('../images/splash.png')}
            style={{width:100, height:100}}
        /> 
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})
