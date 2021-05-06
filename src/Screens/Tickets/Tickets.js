import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../Components/Header'
 import TicketList from './List/TicketList.js'

 const data = [
   {
       Name: "Ahsan Munir",
       Image: require('./../../Assets/Images/avatar/1.png'),
       ApartmentNo: "1123",
       Date: "08-04-2021",
       Status: 'Pending',
       Work: "Plumbing"
   },
   {
       Name: "Umar Wasem",
       Image: require('./../../Assets/Images/avatar/2.png'),
       ApartmentNo: "1121",
       Date: "08-04-2021",
       Status: 'Closed',
       Work: "Plumbing"
   },
   {
       Name: "Isbah",
       Image: require('./../../Assets/Images/avatar/3.png'),
       ApartmentNo: "1223",
       Date: "08-04-2021",
       Status: 'Pending',
       Work: "Plumbing"
   },
   {
       Name: " Roshaan",
       Image: require('./../../Assets/Images/avatar/4.png'),
       ApartmentNo: "1723",
       Date: "08-04-2021",
       Status: 'Closed',
       Work: "Plumbing"
   },
   {
       Name: "Anum ",
       Image: require('./../../Assets/Images/avatar/6.png'),
       ApartmentNo: "1123",
       Date: "08-04-2021",
       Status: 'Pending',
       Work: "Plumbing"
   },
   {
       Name: "M Kamran",
       Image: require('./../../Assets/Images/avatar/5.png'),
       ApartmentNo: "1223",
       Date: "08-04-2021",
       Status: 'Closed',
       Work: "Plumbing"
   },
   {
       Name: "Zainab A",
       Image: require('./../../Assets/Images/avatar/1.png'),
       ApartmentNo: "1003",
       Date: "08-04-2021",
       Status: 'Pending',
       Work: "Plumbing"
   },
]


 const Tickets = ({navigation}) => {
     
   
    return(
      <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center'}}>
         <StatusBar translucent backgroundColor="transparent" />
           
            <FlatList
                
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                extraData={[]}
                ListEmptyComponent={null}
                ListHeaderComponent={<Header header="Tickets" wid={0.9} length={wp("22%")}  />}
                ListFooterComponent={<View style={{height: 100}}></View>} 
                data={data}
                style={{height: hp('100%')}}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => 
                        <TicketList 
                            Name={item.Name}
                            Image={item.Image}
                            ApartmentNo={item.ApartmentNo}
                            Date={item.Date}
                            Status={item.Status}
                            Work={item.Work}
                            Navigation={navigation}
                        />
                }
                
                    />
           
            </View>
    )
 }

 export default Tickets;