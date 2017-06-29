import
React, {
Component
}
from 'react';
import {
TouchableHighlight,
AppRegistry,
Alert,
SectionList,
StyleSheet,
FlatList,
Button,
TextInput,
Navigator,
 Text,
  View ,
  ScrollView}
  from 'react-native';
import SimpleButton from './src/SimpleButton';
import SimpleListView from './src/SimpleListView';
import ListViewGrid from './src/ListViewGrid';
import NavigatorDemo from './src/NavigatorDemo'


export default class HelloWorld extends Component {
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


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

  // render() {
  //   return (
  //
  //     <View style={styles.container}>
  //
  //     <ListViewGrid/>
  //     </View>
//
// );
// }
// }
      // <SectionList
      //   sections={[
      //   {title:'D',data:['Duc Linh']},
      //   {title:'L',data:['Le Kien','Le Duc','Le Tung']},
      //
      // ]}
      // renderItem={({item}) => <Text style={styles.item}> {item}</Text> }
      // renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
      //
      // />


      // <FlatList
      // data={
      //   [
      //     {key:'Duc Linh'},
      //     {key:'Anh Duc'},
      //     {key:'Linh Tan'},
      //     {key:'Thanh Tung'},
      //     {key:'Thanh Thuan'},
      //     {key:'Van Uy'},
      //     {key:'Van Kien'},
      //
      //   ]
      // }
      // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      // />

      //demo scrollview
      // <ScrollView>
      // <Text style= {{fontSize:100}} >aaaaaaaaaaaaa</Text>
      // <Text style= {{fontSize:100}} >aaaaaaaaaaaaa</Text>
      // <Text style= {{fontSize:100}} >aaaaaaaaaaaaa</Text>
      // <Text style= {{fontSize:100}} >aaaaaaaaaaaaa</Text>
      // <Text style= {{fontSize:100}} >aaaaaaaaaaaaa</Text>
      // </ScrollView>

      //demo button
      // <View >
      // <Button
      //   onPress={() => { Alert.alert(' you pressed the button!')}}
      //   title="Click Here"
      // />
      // </View>


      //demo textinput
      // <TextInput
      //   style={{height:40}}
      //   placeholer="Nhap vao day !"
      //   onChangeText={(text)=>this.setState({text})}
      // />
      // <Text style={{color:'red'}}>
      // {this.state.text}
      // </Text>




// const styles=StyleSheet.create({
//   bigblue:{
//     backgroundColor:'red',
//     color:'blue',
//     flex:1,
//     fontSize: 40,
//   },
//   bigred:{
//     backgroundColor:'blue',
//     color:'red',
//     flex:3,
//     fontSize: 40,
//   },
//   container:{
//     flex:1,
//     padding :16
//   },
//   item:{
//     color:'red',
//     fontSize:14,
//     height:40,
//   },
// });

// skip this line if using Create React Native App