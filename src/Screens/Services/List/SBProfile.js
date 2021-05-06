import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../../Components/Header'
 import UnderlineApp from './../../../Components/UnderlineApp'
 import Avatar from './../../../Components/Avatar'
 import { ButtonGroup } from 'react-native-elements';
 import All from './Profie/All'
 import OnDemand from './Profie/OnDemand'
 import Subscribed from './Profie/Subscribed'
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 const SBProfile = ({navigation, route})=> {
    const [index, onChangeIndex] = React.useState(0);
    const buttons = ['All', 'On Demand', 'Subscribed']
    const indexChange = (index) => {
        onChangeIndex(index)
    }
    //  console.log(navigation, route.params)
    return(
        <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center',}}>
                <StatusBar translucent backgroundColor="transparent" />
                <ScrollView
                 showsHorizontalScrollIndicator={false}
                 nestedScrollEnabled
                 showsVerticalScrollIndicator={false}
                 scrollIndicatorInsets={false}
                 scrollEnabled
                >

              
                <Header header="Booked Services"  wid={0.9} length={wp("50%")} />
                <View style={{ flexDirection:'column', alignItems:'center', alignContent:'center', alignSelf:'center'}}> 
                

                    <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#f5f5f5'}}>
                                <View style={{justifyContent:'space-between', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                                <View style={{padding: 5}}>
                                <Avatar
                                    source={route.params.image}
                                    />
                                </View>
                                    <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('32%')}}>
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("2.1%"),color: "black"}}>{route.params.name}</Text>   
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#C54A00"}}>  <FontAwesome5 name="building" style={{padding: 2}} size={12} color="#C54A00" /> Appartment # {route.params.apartmentNo}</Text>
                                    </View>
                                    <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20 }}>
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.4%"),color: "#20A6F9"}}>No. of Services Booked</Text>   
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("3%"),color: "#20A6F9"}}>{route.params.noOfService}</Text>
                                    </View>
                                </View>



                              
                        </View>
                <ButtonGroup
                
                    onPress={indexChange}
                    selectedIndex={index}
                    buttons={buttons}
                    selectedTextStyle={{color:'#00458A',fontFamily:"Poppins-Regular"}}
                    selectedButtonStyle={{backgroundColor:'white', zIndex: 99999, elevation: 5, borderWidth:0}}
                    containerStyle={{height: 50, borderRadius:15,zIndex: 99999, elevation: 4, borderWidth:0, backgroundColor:'#f5f5f5', width: wp('95%'),alignSelf:"center"}}
                    // activeOpacity='1'
                    // selectMultiple
                    activeOpacity='10'
                    textStyle={{color:'#00458A',fontFamily:"Poppins-Regular"}}
                />
                  <View style={{flex:1}}>
                        {
                                 index == 0 ?
                                 <All navigation={navigation}/>: 
                                 index == 1 ?
                                 <OnDemand navigation={navigation}/>: 
                                 index == 2 ?
                                 <Subscribed navigation={navigation}/>: 
                                 null
                        }
                </View>  
                </View>
        
             </ScrollView>
        </View>
    )
 }

 export default SBProfile;