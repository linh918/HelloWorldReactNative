import React,{Component} from 'react';
import {AppRegistry,Button,View,Text,TouchableOpacity} from 'react-native';

export default class SimpleButton extends Component{
  render(){
    return(
      <TouchableOpacity onPress= {()=> console.log('Click button')}>
      <View>
      <Text>Simple button {this.props.name}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}
SimpleButton.defaultProps={
  name:'Linh'
}
// SimpleButton.propTypes={
//   name: React.PropTypes.string
// }
