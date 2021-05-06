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
    },
    {
        Name: "Umar Wasem",
        Image: require('./../../../Assets/Images/avatar/2.png'),
        ApartmentNo: "1121",
        Since: "2020",
    },
    {
        Name: "Isbah",
        Image: require('./../../../Assets/Images/avatar/3.png'),
        ApartmentNo: "1223",
        Since: "2010",
    },
    {
        Name: " Roshaan",
        Image: require('./../../../Assets/Images/avatar/4.png'),
        ApartmentNo: "1723",
        Since: "2018",
    },
    {
        Name: "Anum ",
        Image: require('./../../../Assets/Images/avatar/6.png'),
        ApartmentNo: "1123",
        Since: "2001",
    },
    {
        Name: "M Kamran",
        Image: require('./../../../Assets/Images/avatar/5.png'),
        ApartmentNo: "1223",
        Since: "2002",
    },
    {
        Name: "Zainab A",
        Image: require('./../../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1003",
        Since: "2019",
    },
]


const Old = ({navigation}) => {
    return(
        
        <View style={{padding:20, height: hp('100%')}}>
                <FlatList
                    scrollEnabled
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    extraData={[]}
                    ListEmptyComponent={null}
                    ListFooterComponent={<View style={{height: 300}}></View>} 
                    data={data}
                    style={{height: hp('100%')}}
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
                                    <View style={{width: wp('10%')}}></View>
                                    <Entypo name="dots-three-vertical" style={{padding: 2}} size={20} color="black" />
                                    {/* <View style={{flexDirection:'column', alignItems:'center', padding: 5, paddingLeft:20 }}>
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("1.4%"),color: "#20A6F9"}}>No. of Services Booked</Text>   
                                        <Text style={{ fontFamily:"Poppins-SemiBold",fontSize: hp("3%"),color: "#20A6F9"}}>{item.Since}</Text>
                                    </View> */}
                                </View>
                                {/* <Text>{Name}</Text> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                        }
                    
                        />
            
           
            </View>
       
    )
}

export default Old