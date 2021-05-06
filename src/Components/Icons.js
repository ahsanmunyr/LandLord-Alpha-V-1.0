import React, {useEffect, useState,useRef} from 'react';
import {
    View, TextInput,StyleSheet, Image
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const IconImage = ({source}) => {
    return(
       
  
                
        <Image style={{ margin: 5, width: wp('4.4%')}} resizeMode='contain' source={source} />
    
            
             
    )
 }
 export default IconImage;
 