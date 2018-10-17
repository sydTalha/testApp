import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1Ijoic3lkdGFsaGEiLCJhIjoiY2puY3R3ODFyMWtwMDNwcDZvNmFoNnAzcCJ9.Cvdtw4xWUBrhC5elbXMCjw');

export default class MapScreen extends Component {
  renderAnnotations() {
    return (
      <Mapbox.PointAnnotation
      key='PointAnnotation'
      id='PointAnnotation'
      coordinate={[11.254, 43.772]}>

        <View style={styles.annotationContainer}>
            <View style={styles.annotationFill}/>
        </View>
        <Mapbox.Callout title='Look an Annotation!'/>

      </Mapbox.PointAnnotation>
    )
  }

  render(){
      return(
          <View style={styles.container}>
            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Dark}
                zoomLevel={15}
                centerCoordinate={[11.256, 43.770]}
                showUserLocation={true}
                style={styles.container}>
                
                {this.renderAnnotations()}
            </Mapbox.MapView>
          </View>
      );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    annotationContainer:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:15,
    },
    annotationFill:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'orange',
        transform:[{scale: 0.6}],
    }
});