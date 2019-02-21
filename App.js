import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/paris.jpg';
import PlaceDetail from '.src/components/PlaceDetail/PlaceDetail'

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`,
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.state.selectedPlace} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
        places={this.state.places} 
        onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
