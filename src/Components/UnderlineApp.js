import React, {useEffect, useState,useRef} from 'react';
import {
    View
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//  const UnderlineApp = ({wid, length}) => {
//     return(   
//         <View style={{flexDirection: 'row', justifyContent:"center", top: -10}}>
//                 <View style={{borderColor: '#0079F2', borderWidth: wid, width: 99}} />
//         </View>     
//     )
//  }

 const UnderlineApp = ({wid, length}) => {
    return(   
      
                <View style={{borderColor: '#0079F2', borderWidth: wid, width: length,top: -8}} />
          
    )
 }
 export default UnderlineApp;
