import React, {useEffect, useState,useRef} from 'react';
import {
    View, TextInput,StyleSheet, Image
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 const Icon = ({source}) => {
    return(
       
  
        <MaterialCommunityIcons name={source} style={{padding: 10}} size={30} color="white" />       

    
            
             
    )
 }
 export default Icon;