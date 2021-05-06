import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './../../Components/Header'
import AppText from './../../Components/AppText'

import AppHeading from './../../Components/AppHeading'
import UnderlineApp from './../../Components/UnderlineApp'
import SBList from './List/SBList'
const data = [
    {
        Name: "Ahsan Munir",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1123",
        NoOfService: "08",
    },
    {
        Name: "Umar Wasem",
        Image: require('./../../Assets/Images/avatar/2.png'),
        ApartmentNo: "1121",
        NoOfService: "09",
    },
    {
        Name: "Isbah",
        Image: require('./../../Assets/Images/avatar/3.png'),
        ApartmentNo: "1223",
        NoOfService: "10",
    },
    {
        Name: " Roshaan",
        Image: require('./../../Assets/Images/avatar/4.png'),
        ApartmentNo: "1723",
        NoOfService: "18",
    },
    {
        Name: "Anum ",
        Image: require('./../../Assets/Images/avatar/6.png'),
        ApartmentNo: "1123",
        NoOfService: "01",
    },
    {
        Name: "M Kamran",
        Image: require('./../../Assets/Images/avatar/5.png'),
        ApartmentNo: "1223",
        NoOfService: "02",
    },
    {
        Name: "Zainab A",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1003",
        NoOfService: "19",
    },
]


const ServicesBooked = ({navigation}) => {
    return(
        
        <View style={{padding:20}}>
           <View style={{paddingBottom: 10, left: 10}}>
                <AppHeading label={"Sevices Booked"} />
                <UnderlineApp wid={0.9} length={wp("50%")} />
            </View>
             
  
                <FlatList
                
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    extraData={[]}
                    ListEmptyComponent={null}
                    ListFooterComponent={<View style={{height: 100}}></View>}
                    data={data}
                   
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => 
                            <SBList 
                                Name={item.Name}
                                Image={item.Image}
                                ApartmentNo={item.ApartmentNo}
                                NoOfService={item.NoOfService}
                                Navigation={navigation}
                            />
                                }
                    
                        />
              
           
            </View>
       
    )
}

export default ServicesBooked