import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
import Fontisto from 'react-native-vector-icons/Fontisto';//date
import Header from './../../Components/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Avatar from './../../Components/Avatar'
import { ButtonGroup } from 'react-native-elements';
import All from './TenantsList/All'
 import New from './TenantsList/New'
 import Old from './TenantsList/Old'
const data = [
    {
        Name: "Ahsan Munir",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1123",
        Since: "2008",
    },
    {
        Name: "Umar Wasem",
        Image: require('./../../Assets/Images/avatar/2.png'),
        ApartmentNo: "1121",
        Since: "2020",
    },
    {
        Name: "Isbah",
        Image: require('./../../Assets/Images/avatar/3.png'),
        ApartmentNo: "1223",
        Since: "2010",
    },
    {
        Name: " Roshaan",
        Image: require('./../../Assets/Images/avatar/4.png'),
        ApartmentNo: "1723",
        Since: "2018",
    },
    {
        Name: "Anum ",
        Image: require('./../../Assets/Images/avatar/6.png'),
        ApartmentNo: "1123",
        Since: "2001",
    },
    {
        Name: "M Kamran",
        Image: require('./../../Assets/Images/avatar/5.png'),
        ApartmentNo: "1223",
        Since: "2002",
    },
    {
        Name: "Zainab A",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1003",
        Since: "2019",
    },
]


const ListOfTenants = ({navigation}) => {
   const [index, onChangeIndex] = React.useState(0);
   const buttons = ['All', 'New', 'Old']
   const indexChange = (index) => {
       onChangeIndex(index)
   }
  
    return(
        
      <View style={{ backgroundColor:'#f5f5f5', flex: 6, justifyContent:'center', height: hp('110%')}}>
         <StatusBar translucent backgroundColor="transparent" />
         <ScrollView 
           showsHorizontalScrollIndicator={false}
           nestedScrollEnabled
           showsVerticalScrollIndicator={false}
           scrollIndicatorInsets={false}
           scrollEnabled
         > 
            <Header header="List Of Tenants" wid={0.9} length={wp("45%")}  />
            <ButtonGroup
                                    onPress={indexChange}
                                    selectedIndex={index}
                                    buttons={buttons}
                                    selectedTextStyle={{color:'#00458A',fontFamily:"Poppins-Regular"}}
                                    selectedButtonStyle={{backgroundColor:'white', zIndex: 99999, elevation: 5, borderWidth:0}}
                                    containerStyle={{height: 50, borderRadius:15,zIndex: 99999, elevation: 4, borderWidth:0, backgroundColor:'#f5f5f5', width: wp('90%'),alignSelf:"center"}}
                                    // activeOpacity='1'
                                    // selectMultiple
                                    activeOpacity='10'
                                    textStyle={{color:'#00458A',fontFamily:"Poppins-Regular"}}
                                />
               
               <View style={{flex: 60}}>
                                    {
                                            index == 0 ?
                                            <All navigation={navigation}/>: 
                                            index == 1 ?
                                            <New navigation={navigation}/>: 
                                            index == 2 ?
                                            <Old navigation={navigation}/>: 
                                            null
                                    }
                                </View>
                
           
            </ScrollView>
            </View>
       
    )
}

export default ListOfTenants