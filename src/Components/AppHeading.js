import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 const AppHeading = ({label}) => {
    return(   

                 <Text style={{ 
                                fontFamily:"Poppins-SemiBold",
                                fontSize: hp("3%"),
                                color: "black"}}>{label}</Text>
          
    )
 }
 export default AppHeading;
