import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  ScrollView
} from 'react-native';

import {TabBar} from './TabBarMain';
export default class ScrollViewMain extends Component {


  render() {
    return (

      <ScrollView>
          <TabBar style={styles.tabbar} />

      </ScrollView>








);
  }
}
const {height} =Dimensions.get('window');

const styles = StyleSheet.create({
tabbar:{
  height:height/2,
},
  container: {
    flex: 1,
    flexDirection:'column',



  },

});
