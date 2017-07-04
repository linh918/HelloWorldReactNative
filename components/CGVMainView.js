import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

import ToolbarMain from './ToolbarMain';
import ScrollViewMain from './ScrollViewMain';

export default class CGVMainView extends Component {
  click(){
    console.log("Click button");

  this.props.navigation.navigate('DrawerOpen'); // open drawe
  }

  render() {
    return (
      <View style={styles.container}>
      <ToolbarMain  {...this.props}/>
      <TouchableOpacity
      onPress= {()=> {this.click()}}>
      <View>
      <Text>Simple button </Text>
      </View>
      </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    flexDirection:'column',
    backgroundColor: '#DAD6CC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
