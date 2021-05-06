import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import Feather from 'react-native-vector-icons/Feather';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../Components/Header.js'
 import TextInputFeild from './../../Components/TextFeild.js'
 import AppText from './../../Components/AppText.js'
 import SquareTouchableOpacity from './../../Components/SquareTouchableOpacity.js'
 
 const TicketsForm = ({navigation, route}) => {
   const [name, onChangeName] = React.useState("");
   const [detail, onChangeDetail] = React.useState("");
   const [status, onChangeStatus] = React.useState(route.params.status);
   const Change=()=>{
      if(status == 'Pending'){
         onChangeStatus("Closed")
      }else if(status == 'Closed'){
         onChangeStatus("Pending")
      }
   }
    return(
       
        <View style={{flex: 1, justifyContent:'center',backgroundColor:'#f5f5f5'}}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView 
          
               showsHorizontalScrollIndicator={false}
               nestedScrollEnabled
               showsVerticalScrollIndicator={false}
               scrollIndicatorInsets={false}
               scrollEnabled
          
            >
            <Header header="Ticket Details" wid={0.9} length={wp("40%")}  />
            <View style={{ margin: 10,}}>
               <View style={styles.container}>
                 <View style={styles.innerContainer}>
                 <TextInputFeild
                                            placeholder="Title"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                 </View>
                 <View style={styles.innerContainer}>
                 <TextInputFeild
                                            placeholder="Issue"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                 </View>
                 <View style={styles.innerContainerDetails}>
                 <TextInputFeild
                                            placeholder="Details"
                                            value={detail}
                                            onchange={onChangeDetail}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                                            multiline={true}
                                            numberOfLines={3}
                                            maxLength={40}
                                        
                      />
                 </View>
                 <TouchableOpacity onPress={Change} style={styles.innerContainerPM}>
                  <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
                    <AppText family="Poppins-Regular" size={hp("1.8%")} color="grey" Label="Status" />
                    <Feather name="edit-3" style={{padding: 2}} size={17} color="#FB6E19" />
                  </View>
                  <View style={{backgroundColor: status == 'Pending'? '#D20000': '#009A2E' , borderRadius: 6, width: wp('20%') }}>
                            <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("1.4%"),color: "white", textAlign:'center', top:1}}>{status}</Text>  
                        </View>
                </TouchableOpacity>
              
               </View>
               <View style={{flexDirection: 'row', justifyContent:'space-between', margin: 20, padding: 0, width: wp('65%'), alignSelf:'center' }}>
                  <TouchableOpacity  style={styles.touchableOpacityChat}>
                              <Text style={styles.touchableOpacityText}>Chat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.touchableOpacity}>
                              <Text style={styles.touchableOpacityText}>Update</Text>
                  </TouchableOpacity>
               </View>
              

            </View>
            <View style={{height: 100}}></View>
            </ScrollView>
         </View>
    )
 }


 var styles = StyleSheet.create({
      container:{
      padding: 20,
      borderRadius:12,
      backgroundColor:'#fdfdfd',
      elevation: 10, 
      zIndex: 99999
   },

   innerContainer:{
      borderRadius: 12,
      borderWidth: 0,
      justifyContent: 'flex-start',
      flexDirection:'row', 
      backgroundColor: '#fdfdfd',
      padding: 10,
      height: 60,
      elevation: 10, 
      zIndex: 99999,
      margin: 10,
   },
   innerContainerDetails:{
      borderRadius: 12,
      borderWidth: 0,
      justifyContent: 'flex-start',
      flexDirection:'row', 
      backgroundColor: '#fdfdfd',
      padding: 10,
      height: 100,
      elevation: 10, 
      zIndex: 99999,
      margin: 10,
   },
   innerContainerPM:{
      borderRadius: 12,
      borderWidth: 0,
      justifyContent: 'flex-start',
      flexDirection:'column', 
      backgroundColor: '#fdfdfd',
      padding: 20,
      elevation: 10, 
      zIndex: 99999,
      margin: 10,
      height: 80,
   },
   touchableOpacity:{
      backgroundColor:"#FB6E19",
      width: wp('30%'),
      height: hp('6%'),
      justifyContent: 'center',
      borderRadius: 15
  },
  touchableOpacityChat:{
      backgroundColor:"#009A2E",
      width: wp('30%'),
      height: hp('6%'),
      justifyContent: 'center',
      borderRadius: 15
  },
  touchableOpacityText: {
      color: 'white',
      fontFamily: 'Poppins-SemiBold',
      fontSize: hp('2'),
      textAlign:'center'
 },
   
 })
 export default TicketsForm;