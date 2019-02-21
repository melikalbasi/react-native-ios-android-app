import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';


export default class App extends Component {

  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={{width: 300}}
        placeholder="Username"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
