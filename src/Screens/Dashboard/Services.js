import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import AppText from './../../Components/AppText'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import LinearGradient from 'react-native-linear-gradient'

 const Services = ({image, text, digits}) => {
    return(
        <View style={{flexDirection:'row', padding: 10, left: 0}}>
            <TouchableOpacity>
            <LinearGradient
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[ '#0044F2','#4EA5F6']}
                style={Styles.linearGradient}
                >
                    <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                         <Image resizeMode="contain" style={{height:35, width: 35, }} source={image} />
                         <View style={{width: wp('30%'), marginTop:10}}><AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label={text} /></View>
                         <AppText textAlign="center" family="Poppins-SemiBold" size={hp("2.3%")} color="white" Label={digits} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
 }

 const Styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 150,
        width: 150,
      },
})
 export default Services;

