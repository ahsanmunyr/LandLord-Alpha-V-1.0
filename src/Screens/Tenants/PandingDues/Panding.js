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
const data = [
    {
        Name: "Ahsan Munir",
        Image: require('./../../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1123",
        Since: "2008",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''

    },
    {
        Name: "Umar Wasem",
        Image: require('./../../../Assets/Images/avatar/2.png'),
        ApartmentNo: "1121",
        Since: "2020",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "Isbah",
        Image: require('./../../../Assets/Images/avatar/3.png'),
        ApartmentNo: "1223",
        Since: "2010",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
    {
        Name: " Roshaan",
        Image: require('./../../../Assets/Images/avatar/4.png'),
        ApartmentNo: "1723",
        Since: "2018",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
    {
        Name: "Anum ",
        Image: require('./../../../Assets/Images/avatar/6.png'),
        ApartmentNo: "1123",
        Since: "2001",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "M Kamran",
        Image: require('./../../../Assets/Images/avatar/5.png'),
        ApartmentNo: "1223",
        Since: "2002",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "Zainab A",
        Image: require('./../../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1003",
        Since: "2019",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
]

const Panding = ({navigation}) => {

  
    return(
        
      <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center', alignSelf:'center'}}>
         <StatusBar translucent backgroundColor="transparent" />
     

       
                                        <FlatList
                                            scrollEnabled
                                            nestedScrollEnabled
                                            showsVerticalScrollIndicator={false}
                                            showsHorizontalScrollIndicator={false}
                                            extraData={[]}
                                            ListEmptyComponent={null}
                                            ListFooterComponent={<View style={{height: 100}}></View>} 
                                            data={data}
                                            
                                            keyExtractor={(item, index) => index}
                                            renderItem={({ item, index }) => 
                                            <View style={{flexDirection:'row', padding: 13, alignSelf:'center'}}>
                                                <TouchableOpacity style={{zIndex: 99, elevation: 4,borderWidth:0, borderRadius:12,backgroundColor:'#fafafa'}}>
                                                    <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#fafafa'}}>
                                                        <View style={{justifyContent:'space-between', flexDirection:'row', paddingTop: 15,  paddingBottom: 15, paddingLeft: 10, paddingRight: 10}}>
                                                        <View style={{padding: 5}}>
                                                        <Avatar
                                                            source={item.Image}
                                                            />
                                                        </View>
                                                            <View style={{flexDirection:'column', alignItems:'flex-start', padding:5, width: wp('50%')}}>
                                                                <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("2.1%"),color: "black"}}>{item.Name}</Text>   
                                                                <View style={{flexDirection:'row', justifyContent:"flex-start", width: wp('30%')}}>
                                                                    <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#41B9FF"}}>
                                                                        <Fontisto name="date" style={{}} size={12} color="#41B9FF" /> 
                                                                             {''} Since {item.Since}
                                                                    </Text>
                                                                    <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.2%"),color: "#C54A00", paddingLeft: 5}}>  
                                                                        <FontAwesome5 name="building" style={{}} size={12} color="#C54A00" />
                                                                        {''}  Appartment # {item.ApartmentNo}
                                                                    </Text>
                                                                </View>
                                                               
                                                            </View>
                                                          
                                                            <View style={{justifyContent:'center', flexDirection: 'column', width: wp('20%')}}>
                                                                  <View style={{flexDirection:"row"}}>
                                                                     <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.6%"),color: "black", paddingLeft: 5}}>Panding</Text>
                                                                     <Image resizeMode="contain" source={require('./../../../Assets/Images/cancel.png')} style={{width:12, height: 12, margin:5}} />
                                                                  </View>
                                                                <View>
                                                                 <Text style={{ fontFamily:"Poppins-Bold",fontSize: hp("1.6%"),color: "#D60000", paddingLeft: 5}}>{item.pandingPrice}</Text>
                                                                </View>
                                                              </View>
                                                            <Entypo name="dots-three-vertical" style={{padding: 2}} size={20} color="black" />
                                                     
                                                        </View>
                                                        
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                                } 
                    />
            </View>
       
    )
}

export default Panding