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
import All from './PandingDues/All'
import Paid from './PandingDues/Paid'
import Panding from './PandingDues/Panding'

const data = [
    {
        Name: "Ahsan Munir",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1123",
        Since: "2008",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''

    },
    {
        Name: "Umar Wasem",
        Image: require('./../../Assets/Images/avatar/2.png'),
        ApartmentNo: "1121",
        Since: "2020",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "Isbah",
        Image: require('./../../Assets/Images/avatar/3.png'),
        ApartmentNo: "1223",
        Since: "2010",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
    {
        Name: " Roshaan",
        Image: require('./../../Assets/Images/avatar/4.png'),
        ApartmentNo: "1723",
        Since: "2018",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
    {
        Name: "Anum ",
        Image: require('./../../Assets/Images/avatar/6.png'),
        ApartmentNo: "1123",
        Since: "2001",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "M Kamran",
        Image: require('./../../Assets/Images/avatar/5.png'),
        ApartmentNo: "1223",
        Since: "2002",
        panding: 'yes',
        paid: 'no',
        pandingPrice: '1,200 AED'
    },
    {
        Name: "Zainab A",
        Image: require('./../../Assets/Images/avatar/1.png'),
        ApartmentNo: "1003",
        Since: "2019",
        panding: 'no',
        paid: 'yes',
        pandingPrice: ''
    },
]


const TenantsPendingDues = ({navigation}) => {
   const [index, onChangeIndex] = React.useState(0);
   const buttons = ['All', 'Pending', 'Paid']
   const indexChange = (index) => {
       onChangeIndex(index)
   }
  
    return(
        
      <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center'}}>
         <StatusBar translucent backgroundColor="transparent" />
           <ScrollView 
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              scrollIndicatorInsets={false}
              scrollEnabled
           >
                <Header header="Tenants Pending Dues" wid={0.9} length={wp("70%")}  />
                {/* <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center', alignSelf:'center',}}> */}
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
                    
                                            {
                                                    index == 0 ? 
                                                    <All navigation={navigation}/>: 
                                                    index == 1 ?
                                                    <Panding navigation={navigation}/>: 
                                                    index == 2 ?
                                                    <Paid navigation={navigation}/>: 
                                                    null
                                            }
                
                    
         </ScrollView>   
    </View>
       
    )
}

export default TenantsPendingDues