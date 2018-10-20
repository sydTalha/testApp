import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import Polyline from '@mapbox/polyline';

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

            coords:[]
        }
    }
    
    componentDidMount(){
        console.log('hello');
        this.getDirections("43.772,11.254", "43.770,11.256")
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

  async getDirections(startLoc, destinationLoc ){
      try {
          let response=await fetch(`https://api.openrouteservice.org/directions?api_key=5b3ce3597851110001cf6248cfc80d2350644635aad28e4cb01ac4c2&coordinates=11.254,43.772%7C11.256,43.770&profile=driving-car`,{
              method:'GET'
          });
          let responseJson=await response.json();
          
          let points=Polyline.decode(responseJson.routes[0].geometry);
          let coords=points.map((point, index)=>{
              return {
                  latitude: point[0],
                  longitude: point[1]
              }
          })
          this.setState({coords: coords})
          return coords
      } catch (error) {
          alert(error)
          return error
      }
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
                {/* <Mapbox.ShapeSource id='line1' shape={this.state.route}>
                    <Mapbox.LineLayer id='linelayer1' style={{lineColor:'red'}}/>
                </Mapbox.ShapeSource> */}

                <Mapbox.Polyline
                coordinates={this.state.coords}
                strokeWidth={2}
                strokeColor="red"
                />


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