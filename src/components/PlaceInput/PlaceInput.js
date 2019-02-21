import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {

  state = {
    placeName: ""
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
    
    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
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
    )
  }

}

const styles = StyleSheet.create({
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
})

export default PlaceInput;