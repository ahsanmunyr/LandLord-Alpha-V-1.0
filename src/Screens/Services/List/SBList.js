import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import Avatar from './../../../Components/Avatar'
 import AppText from './../../../Components/AppText'
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import LinearGradient from 'react-native-linear-gradient'

 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
 export const SBList = ({Image, Name, ApartmentNo,NoOfService,Navigation }) => {
    return(
        <View style={{flexDirection:'row', justifyContent:'center', paddingLeft: 5, paddingRight: 5, margin: 10, width: wp('90%'), alignSelf:'center'}}>
            <TouchableOpacity onPress={()=> Navigation.navigate('profile',{image: Image, name: Name, apartmentNo: ApartmentNo, noOfService: NoOfService}) } style={{zIndex: 99, elevation: 4,borderWidth:0, borderRadius:12,backgroundColor:'#fafafa'}}>
                <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#fafafa'}}>
                    <View style={{justifyContent:'space-between', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                    <View style={{padding: 5}}>
                    <Avatar
                        source={Image}
                        />
                    </View>
                        <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('32%')}}>
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("2.1%"),color: "black"}}>{Name}</Text>   
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#C54A00"}}>  <FontAwesome5 name="building" style={{padding: 2}} size={12} color="#C54A00" /> Appartment # {ApartmentNo}</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20 }}>
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.4%"),color: "#20A6F9"}}>No. of Services Booked</Text>   
                             <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("3%"),color: "#20A6F9"}}>{NoOfService}</Text>
                        </View>
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
 export default SBList;