import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RoundIcon from './../../../../Components/RoundIcon'
 const data = [
    {
        Name: "Internet",
        Image: require('./../../../../Assets/Images/a9.png'),
        Duration: "Per Month",
        AED: "50",
    },
    {
        Name: "Cable",
        Image: require('./../../../../Assets/Images/a2.png'),
        Duration: "Per Month",
        AED: "10",
    },
    {
        Name: "Electricity",
        Image: require('./../../../../Assets/Images/a6.png'),
        Duration: "Per Month",
        AED: "90",
    },
    {
        Name: "Water",
        Image: require('./../../../../Assets/Images/a8.png'),
        Duration: "Per Month",
        AED: "80",
    },
]


 const All = ({navigation, route})=> {
     return(
        <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    extraData={[]}
                    ListEmptyComponent={null}
                    ListFooterComponent={<View style={{height: 100}}></View>} 
                    data={data}
                 
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => 
                    <View style={{flexDirection:'row', paddingLeft: 5, paddingRight: 5, margin: 5, width: wp('90%')}}>
                          <TouchableOpacity disabled>
                                   <View style={{borderWidth:0,
                                     borderRadius:12,
                                      backgroundColor:'#fafafa',
                                       zIndex: 99, elevation: 4,
                                        
                                         flexDirection:'row',
                                       }}>
                                       <View style={{justifyContent:'center', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                                       <View style={{width: wp('20%'), margin: 2, padding: 1}}>
                                           <RoundIcon
                                               source={item.Image}
                                               />
                                       </View>
                                           <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('35%'), top: 5}}>
                                               <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("3%"),color: "black", textAlign:'left'}}>{item.Name}</Text>   
                                               <Text style={{ fontFamily:"Poppins-Regular",fontSize: hp("1.4%"),color: "black",textAlign:'left'}}> {item.Duration}</Text>
                                           </View>
                                           <View style={{width: wp('10%')}}></View>
                                           <View style={{flexDirection:'column', padding: 5, top: 10, justifyContent:'flex-end',width: wp('20%') }}>
                                               <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.6%"),color: "#20A6F9"}}>Price</Text>   
                                                <View style={{flexDirection:'row',}}>
                                                    <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("3.7%"),color:"#20A6F9"}}>{item.AED}</Text>
                                                    <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("2%"),color:"#20A6F9", marginVertical: 4}}>AED</Text>
                                                </View>
                                           </View>
                                       </View>
                                       {/* <Text>{Name}</Text> */}
                                   </View>
                               </TouchableOpacity>
                    </View>
                    }
                    
                        />
     )
 }

 export default All