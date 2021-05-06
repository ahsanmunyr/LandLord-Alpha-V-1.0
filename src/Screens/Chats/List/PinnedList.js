import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import { Badge } from 'react-native-paper';

 import Avatar from './../../../Components/Avatar'
 import AppText from './../../../Components/AppText'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
 export const PinnedList = ({Image, Name, Message,UnReadMessage,Navigation }) => {
   
    return(
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity   >
                <View style={{ borderRadius:12, justifyContent:'space-between', flexDirection:'row'}}>
                    <View style={{ flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10, justifyContent:'space-around'}}>
                    <View style={{padding: 5}}>
                    <Avatar
                        source={Image}
                        />
                    </View>
                    {
                            UnReadMessage != null ?
                        <View style={{flexDirection:'column', padding:5, width: wp('45%'), justifyContent:'flex-start'}}>
                             <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("2.4%"),color: "#516091"}}>{Name}</Text>   
                             <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("1.8%"),color: "#516091", }} numberOfLines={1}>{Message}</Text>
                        </View>:
                        <View style={{flexDirection:'column', padding:5, width: wp('45%'), justifyContent:'flex-start'}}>
                             <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("2.4%"),color: "#707070"}}>{Name}</Text>   
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.8%"),color: "#707070", }} numberOfLines={1}>{Message}</Text>
                         </View>
                    }
                        {
                            UnReadMessage != null ?
                          <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20, top: 15 }}>
                               <Badge style={{ backgroundColor: '#ADEBBE', color: 'white'}}>{UnReadMessage}</Badge>
                          </View>:  <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20, top: 15 }}>
                               <Badge style={{ backgroundColor: '#f5f5f5', color: 'white'}}></Badge>
                          </View>
                        }
                       
                    </View>
                    {/* <Text>{Name}</Text> */}
                </View>
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
 export default PinnedList;