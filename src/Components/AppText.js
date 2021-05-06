import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 const AppText = ({Label, color, size, family, textAlign,}) => {
    return(   
        
               <Text  style={{color: color,
                fontFamily: family,
                fontSize: size,
                 textAlign:textAlign, 
                   }}>
                   {Label}
                </Text>
         
    )
 }
 export default AppText;
