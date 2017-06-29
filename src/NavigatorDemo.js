import React,{Component} from 'react';
import {AppRegistry,Button,View,Text,Navigator} from 'react-native';

export default class SimpleButton extends Component{
  constructor(props){
    super(props);

  }
  _renderScene(route,navigator){
    let name=route.name;
    switch (name) {
      case 'SimpleButton':
        return <SimpleButton/>;
        break;
      case 'ListViewGrid':
        return <ListViewGrid/>;
        break;

    }
  }

  render(){
    return(
      <View>
      <Navigator
      renderScene={this._renderScene.bind(this)}
      initialRoute={{name:'SimpleButton'}}
      />
      </View>

    )
  }
}

AppRegistry.registerComponent('HelloWorld',()=>NavigatorDemo);
