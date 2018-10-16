import React, { Component } from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder="Roll No:- Fa-16/BSCS/050"
            returnKeyType="go"
            autoCorrect={false}
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      padding:20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#1565c0',
        height:40,
        textAlign: 'center'
        //paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        marginTop:10,
        color: '#fff',
        fontWeight: "700"

    }
  });
