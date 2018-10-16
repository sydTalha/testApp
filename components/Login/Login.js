import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../../images/splash.png')}/>

                <Text style={styles.title}>CASE Bus Tracking App</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm/>
            </View>

        </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#42a5f5',
        
      
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        marginTop: 50,
        marginBottom: 40,
        justifyContent: 'center'
    },

    logo:{
        width: 100,
        height: 100
    },
    title:{
        color:'#fff',
        marginTop:10,
        textAlign: 'center',
        opacity: 0.7
    },
    formContainer:{
        flex:1
    }

  });
