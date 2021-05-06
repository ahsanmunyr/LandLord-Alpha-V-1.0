import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity,StyleSheet, Text
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const SquareTouchableOpacity = ({ onPress, title }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
             <Text style={styles.touchableOpacityText}>{title}</Text>
        </TouchableOpacity>
    )
 }
 export default SquareTouchableOpacity;
 var styles = StyleSheet.create({
    touchableOpacity:{
        
        backgroundColor:"#FB6E19",
        width: wp('67%'),
        height: hp('6%'),
        justifyContent: 'center',
        borderRadius: 15
    },
    touchableOpacityText: {
      color: 'white',
    //   fontFamily: '' 
     fontFamily: 'Poppins-Regular',
      fontSize: hp('2'),
      textAlign:'center'
    },
})