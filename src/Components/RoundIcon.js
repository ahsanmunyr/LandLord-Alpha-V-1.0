import React, {useEffect, useState,useRef} from 'react';
import {
   StyleSheet, View, Image
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const RoundIcon = ({source}) => {
    return(
        <View style={{  width: wp('16.5%'), backgroundColor:'#FB6E19', borderRadius:  50, justifyContent:'center', flex:1, alignItems:'center'}}>
                 <Image source={source} style={{width: 20, height: 40}} resizeMode='contain' resizeMethod='auto' />
        </View>
    )
 }
 export default RoundIcon;
