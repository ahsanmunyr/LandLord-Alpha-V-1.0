import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import RoundIcon from './../../../Components/RoundIcon'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 export const ODList = ({Image, Name, Aed ,Duration }) => {
    return(
        <View style={{flexDirection:'row',margin: 5, justifyContent:'center', paddingLeft: 5, paddingRight: 5, width: wp('86%'), alignSelf:'center'}}>
            <TouchableOpacity disabled>
                <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#fafafa', zIndex: 99, elevation: 4, justifyContent:'space-between', flexDirection:'row'}}>
                    <View style={{justifyContent:'center', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                    <View style={{padding: 5}}>
                        <RoundIcon
                            source={Image}
                            />
                    </View>
                        <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('35%'), top: 5}}>
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("3%"),color: "black", textAlign:'left'}}>{Name}</Text>   
                             <Text style={{ fontFamily:"Poppins-Regular",fontSize: hp("1.4%"),color: "black",textAlign:'left'}}> {Duration}</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', padding: 5, top: 10 }}>
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.6%"),color: "#20A6F9"}}>Starting From</Text>   
                          <View style={{flexDirection:'row'}}>
                              <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("3.7%"),color:"#20A6F9"}}>{Aed}</Text>
                              <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("2%"),color:"#20A6F9", marginVertical: 4}}>AED</Text>
                          </View>
                        </View>
                    </View>
                    {/* <Text>{Name}</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )
 }

 export default ODList;