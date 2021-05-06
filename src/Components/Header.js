import React, {useEffect, useState,useRef} from 'react';
import {
    View,Text, StatusBar, TouchableOpacity,Image,StyleSheet
 } from 'react-native';
 import { Avatar,Badge } from 'react-native-elements';
 import Icon from 'react-native-vector-icons/EvilIcons';
 import TextSample from './Text'
import AppText from './AppText'
import UnderlineApp from './UnderlineApp'
import AppHeading from'./AppHeading'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
 const Header = ({header, wid,length}) => {
    return(   
        <View style={{  
            height: hp('17%'), 
            justifyContent:'space-between',
            backgroundColor:'#f5f5f5',
            flexDirection:'row',
            paddingTop:35,
            paddingLeft: 20,
            paddingRight: 10
         }}>
              <StatusBar translucent backgroundColor="transparent" />
         {
             header == null ?
             <View style={{justifyContent:'flex-start', flexDirection:'row'}}>
            <Avatar
                rounded
                size="medium"
                source={require('./../Assets/Images/avatar.jpg')}
                />
                <View style={{padding: 8}} >
                    <AppText family="Poppins-Regular" size={hp("1.2%")} color="black" Label="Welcome Landlord!" />
                    <AppText family="Poppins-SemiBold" size={hp("2%")} color="black" Label="Joshua Willis" />
               
                </View>
            </View >: (
                <View style={{padding: 8,justifyContent:'flex-start', flexDirection:'column'}}>
      
                    {/* <Text style={styles.textUnderLine}>{header}</Text> */}
                    <AppHeading label={header} />
                    <UnderlineApp wid={wid} length={length} />
                </View>

            )
         }
            

            <View style={{justifyContent:'flex-end', flexDirection:'row', padding: 7}}>
            <TouchableOpacity  onPress={()=> alert("notification")} style={{}}>
                <View style={{  backgroundColor:'#f5f5f5', borderWidth: 0, borderRadius: 50, padding: 8, height:hp('5.4%'), width:wp('10%') , zIndex: 99999, elevation: 4, }}>
                     <Badge status="error" containerStyle={{ position: 'absolute', top: 5, right: 7 }} />
                     <Icon name="bell" style={{top:1}} size={25} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> alert("message")} style={{}}>
                <View style={{padding:10, top: 3}}>
                    <Image resizeMode="contain" source={require('./../Assets/Images/menu.png')} />
                </View>
            </TouchableOpacity>
            </View>
        </View>     
    )
 }


 export default Header;
