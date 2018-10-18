import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1Ijoic3lkdGFsaGEiLCJhIjoiY2puY3R3ODFyMWtwMDNwcDZvNmFoNnAzcCJ9.Cvdtw4xWUBrhC5elbXMCjw');

export default class MapScreen extends Component {

    constructor(){
        super();
        this.state={
            route:
            {
                "type" : "FeatureCollection",
                "features": [
                    {
                        "type":"Feature",
                        "properties":{},
                        "geometry":{
                            "type":"LineString",
                            "coordinates":[
                                [
                                    11.254,
                                    43.772
                                ],
                                [
                                    11.256,
                                    43.770
                                ]
                            ]
                        }
                    }
                ]
            },
        }
    }
    
  renderAnnotations() {
    return (
      <Mapbox.PointAnnotation
      key='PointAnnotation'
      id='PointAnnotation'
      title='BusStops'
      coordinate={[11.254, 43.772]}>
        
        <Text style={{marginBottom:5, fontWeight:'700'}}>G-10 Stop</Text>
        <View style={styles.annotationContainer}>
            <Image
            style={{width:30, height:30}} 
            source={require('../../images/busIcon.jpg')}/>
        </View>
            
        <Mapbox.Callout title='Look an Annotation!'/>

      </Mapbox.PointAnnotation>
    )
  }

  render(){
      
      return(
          <View style={styles.container}>
            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={15}
                centerCoordinate={[11.256, 43.770]}
                showUserLocation={true}
                style={styles.container}>


                {this.renderAnnotations()}
                <Mapbox.ShapeSource id='line1' shape={this.state.route}>
                    <Mapbox.LineLayer id='linelayer1' style={{lineColor:'red'}}/>
                </Mapbox.ShapeSource>
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
        //alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'white',
        borderRadius:10,
    },
    annotationFill:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'orange',
        transform:[{scale: 0.6}],
    }
});