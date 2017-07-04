import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import ToolbarSignIn from './ToolbarSignIn';

export default class CGVDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ToolbarSignIn {...this.props}/>
      <View style={{flex:1}} >
      </View>
      <View style={styles.editTextContainer} >
      <TextInput
      placeholder="Email hoặc tên đăng nhập"
      underlineColorAndroid= 'transparent'
      />
      <TextInput
      placeholder="Mật khẩu"
      underlineColorAndroid= 'transparent'
      />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity>
      <Button style={styles.buttonDangNhap}
      title="Đăng nhập"
       color="#AD2B32"
      />
      </TouchableOpacity>
      </View>
      <View style={{flex:0.2,alignItems:'center'}}>
      <Text>hoặc</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity>
      <Button style={styles.buttonDangNhap}
      title="Đăng ký bằng facebook"
       color="#3F60AF"
      />
      </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
      <Text style={{color:'white'}}>Đăng ký tài khoản CGV</Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={{color:'white'}}>Quên mật khẩu CGV</Text>
      </View>

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
   editTextContainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor :'white',

  },
  buttonContainer: {
   flex:1,
   flexDirection:'column',
   justifyContent:'center',


 },
  buttonDangNhap:{
    borderRadius:10,


  },

  textContainer: {
   flex:0.5,
   alignItems:'center',
   justifyContent:'center',


 }

});
