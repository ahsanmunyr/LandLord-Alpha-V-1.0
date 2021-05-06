import React, {useEffect, useState,useRef} from 'react';
import {
   StyleSheet, View, Image
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const Logo = () => {
    return(
        <View style={styles.main}>
                  <Image style={styles.imageLogo} resizeMode="contain" source={require('./../Assets/Images/brand1.png')}  />
        </View>
    )
 }
 export default Logo;
 var styles = StyleSheet.create({
    imageLogo: {
        width: wp('70%'),
        height: hp('20%'), 
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})