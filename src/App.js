import React, { Component } from 'react';
import Route from "./Route"
import {Text ,LogBox} from 'react-native';



class App extends Component{
  constructor(props){
    super(props)
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false; 
  }
  render(){
    return (
        <Route/>
    );
  }
}

export default App;