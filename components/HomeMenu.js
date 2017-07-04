/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View
} from 'react-native';

import icAccount from '../media/icon/ic_account.png';
import icBell from '../media/icon/ic_bell.png';
import icSetting from '../media/icon/ic_setting.png';


export default class HomeMenu extends Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.rowContainer}>
      <Image source={icBell} />
      <Image source={icAccount} />

      <Image source={icSetting} />
      </View>

      <View style={styles.columnContainer}>
      <Text style={styles.text} >Đăng nhập</Text>
      <Text style={styles.text}>Đặt vé theo phim</Text>
      <Text style={styles.text}>Đặt vé theo rạp</Text>
      </View>
      


      </View>
    );
  }
}
const {height} =Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    flexDirection:'column',
  },
  rowContainer: {
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  columnContainer: {
    flex:1,
    backgroundColor: 'black',
 alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  text:{
    color:'white',
    fontSize:15,
  }

});
