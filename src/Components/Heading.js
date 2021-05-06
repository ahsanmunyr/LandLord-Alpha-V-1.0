import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const Heading = ({Label}) => {
    return(   
        <View style={{flexDirection: 'row', justifyContent:"center"}}>
               <Text  style={{color: 'white', fontFamily: 'Poppins-Regular',fontSize: hp('4.3%'), textAlign:'center'}}>
                   {Label}
                </Text>
        </View>     
    )
 }
 export default Heading;
