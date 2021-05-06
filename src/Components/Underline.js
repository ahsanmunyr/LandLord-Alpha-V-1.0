import React, {useEffect, useState,useRef} from 'react';
import {
    View
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const Underline = () => {
    return(   
        <View style={{flexDirection: 'row', justifyContent:"center"}}>
                <View style={{borderColor: 'white', borderWidth: 0.4, width: wp('62%')}} />
        </View>     
    )
 }
 export default Underline;
