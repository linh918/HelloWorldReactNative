import
React, {
Component
}
from 'react';
import {

AppRegistry,
Alert,
StyleSheet,
Button,
 Text,
  View ,
}
  from 'react-native';

import {SlideMenu} from './Router'
export default class App extends Component {

     render() {
       return(
        <SlideMenu/>
       );
   }
 }
