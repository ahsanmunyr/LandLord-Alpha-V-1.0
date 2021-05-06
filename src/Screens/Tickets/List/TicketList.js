import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
import Fontisto from 'react-native-vector-icons/Fontisto';//date
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Avatar from './../../../Components/Avatar'

const TicketList = ({Name,Image,ApartmentNo,Date,Status,Work,Navigation}) => {

return(
    <View style={{flexDirection:'row', padding: 13, justifyContent:'center', marginLeft: 5, marginRight: 5}}>
        <TouchableOpacity onPress={()=> Navigation.navigate('ticketsForm', {status:Status })} style={{zIndex: 99, elevation: 4,borderWidth:0, borderRadius:12,backgroundColor:'#fafafa'}}>
            <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#fafafa'}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                <View style={{padding: 5}}>
                <Avatar
                    source={Image}
                    />
                </View>
                    <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('50%')}}>
                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("2.1%"),color: "black"}}>{Name}</Text>   
                        <View style={{flexDirection:'row', justifyContent:"flex-start", width: wp('30%')}}>
                            <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#41B9FF"}}>
                                <Fontisto name="date" style={{}} size={12} color="#41B9FF" /> 
                                    {''} Since {Date}
                            </Text>
                            <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#C54A00", paddingLeft: 5}}>  
                                <FontAwesome5 name="building" style={{}} size={12} color="#C54A00" />
                                {''}  Appartment # {ApartmentNo}
                            </Text>
                        </View>
                        
                    </View>
                    {/* backgroundColor:'#009A2E' */}
                  
                    <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20, justifyContent:'space-between' }}>
                        <View style={{backgroundColor: Status == 'Pending'? '#D20000': '#009A2E' , borderRadius: 6, width: wp('20%') }}>
                            <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("1.4%"),color: "white", textAlign:'center', top:1}}>{Status}</Text>  
                        </View>
                       
                        <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("1.5%"),color: "black"}}>{Work}</Text>
                    </View>
                </View>
         
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default TicketList;