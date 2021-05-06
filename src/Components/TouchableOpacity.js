import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity,StyleSheet, Text
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const TouchableOpacityBtn = ({ onPress, title,backgroundColor }) => {
    return(
        <TouchableOpacity onPress={onPress} style={{
          backgroundColor:backgroundColor,
          elevation: 9999,
          // shadowColor: 'black',
          width: wp('60%'),
          height: hp('7%'),
          justifyContent: 'center',
          borderRadius: 25,
          zIndex: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
           }}>
             <Text style={styles.touchableOpacityText}>{title}</Text>
        </TouchableOpacity>
    )
 }
 export default TouchableOpacityBtn;
 var styles = StyleSheet.create({
    touchableOpacity:{
        
        borderWidth: 2,
        borderColor: 'white',
        width: wp('60%'),
        height: hp('7%'),
        justifyContent: 'center',
        borderRadius: 25
    },
    touchableOpacityText: {
      color: 'white',
    //   fontFamily: '' 
     fontFamily: 'Poppins-Bold',
      fontSize: hp('2'),
      textAlign:'center'
    },
})