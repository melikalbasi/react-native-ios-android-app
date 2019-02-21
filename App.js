import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default class App extends Component {

  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map(place => (
      <Text>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Places You Want To Go"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button 
          title="Add" 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placesOutput}
        </View>
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
  },
  innerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
