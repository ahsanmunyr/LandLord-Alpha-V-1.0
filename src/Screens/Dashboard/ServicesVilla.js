import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import AppText from './../../Components/AppText'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 const ServicesVilla = ({image, text, description}) => {
    return(
        <View style={{
            flexDirection:'column',
            padding: 5,
            backgroundColor:'white',
            borderRadius: 15,
            height: hp('32%'),
            width: wp('50%'),
            margin: 20,
            justifyContent:'flex-start',
            alignItems:'center'
            }}>
               
              
                <Image style={{
                    borderRadius: 6,
                    height: hp('18%'),
                    width: wp('45%'),
                     
                    }} 
                    resizeMode="contain"
                    source={image}/>

                     <View style={{justifyContent:'flex-start', flexDirection:'column', padding: 5}}>
                        <AppText textAlign="left" family="Poppins-Bold" size={hp("2.6%")} color="black" Label={text} />
                        <AppText textAlign="left"  family="Poppins-SemiBold" size={hp("1.6%")} color="#9c9c9c" Label={description} />
                    </View> 
                     
                  
                      
                  
    
           
        </View>
    )
 }
 export default ServicesVilla;

