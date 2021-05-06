import React, {useEffect, useState,useRef} from 'react';
import {
      View,Text,StatusBar,FlatList,Image,ScrollView, Animated
 } from 'react-native';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../Components/Header'
 import AppText from './../../Components/AppText'
 import PinnedList from './List/PinnedList'
 import LinearGradient from 'react-native-linear-gradient'


 const PINNED = [
  
   {
      image: require('./../../Assets/Images/avatar/1.png'),
      Name: "Ashen Mugger",
      Message: "Have you sent the upload",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/3.png'),
      Name: "Will Wade",
      Message: "You know this, right?",
      UnReadMessage: 2
  },
   {
      image: require('./../../Assets/Images/avatar/4.png'),
      Name: "Beverly Gray",
      Message: "You should have seen her face when",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/1.png'),
      Name: "Ashen Mugger",
      Message: "Have you sent the upload",
      UnReadMessage: null
   },
 
]

const OTHER = [
  
   {
      image: require('./../../Assets/Images/avatar/1.png'),
      Name: "Ashen Mugger",
      Message: "Have you sent the upload",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/3.png'),
      Name: "Will Wade",
      Message: "You know this, right?",
      UnReadMessage: 2
  },
   {
      image: require('./../../Assets/Images/avatar/4.png'),
      Name: "Beverly Gray",
      Message: "You should have seen her face when",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/1.png'),
      Name: "Ashen Mugger",
      Message: "Have you sent the upload",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/3.png'),
      Name: "Will Wade",
      Message: "You know this, right?",
      UnReadMessage: 2
  },
   {
      image: require('./../../Assets/Images/avatar/4.png'),
      Name: "Beverly Gray",
      Message: "You should have seen her face when",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/1.png'),
      Name: "Ashen Mugger",
      Message: "Have you sent the upload",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/3.png'),
      Name: "Will Wade",
      Message: "You know this, right?",
      UnReadMessage: 2
  },
   {
      image: require('./../../Assets/Images/avatar/4.png'),
      Name: "Beverly Gray",
      Message: "You should have seen her face when",
      UnReadMessage: null
   },
   {
      image: require('./../../Assets/Images/avatar/3.png'),
      Name: "Will Wade",
      Message: "You know this, right?",
      UnReadMessage: 2
  },
  {
   image: require('./../../Assets/Images/avatar/3.png'),
   Name: "Will Wade",
   Message: "You know this, right?",
   UnReadMessage: 2
},
{
   image: require('./../../Assets/Images/avatar/3.png'),
   Name: "Will Wade",
   Message: "You know this, right?",
   UnReadMessage: 2
},
{
image: require('./../../Assets/Images/avatar/3.png'),
Name: "Will Wade",
Message: "You know this, right?",
UnReadMessage: 2
},
]


 const Chats = ({navigation}) => {
   const scrollY = React.useRef(new Animated.Value(0)).current;
   const Pin = ()=> {
      return(
         <FlatList 
         nestedScrollEnabled
         style={{}}
     
         ListHeaderComponent={
            <View>
               <View style={{ 
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  paddingLeft: 50, paddingRight: 50, marginBottom: 20
                  }}>
                     <LinearGradient
                              start={{ x: -1, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              colors={[ '#0044F2','#4EA5F6']}
                              style={{ alignItems:'center',backgroundColor: '#0079F2', borderRadius: 12, justifyContent:'center', flexDirection:'row', width: wp('65%')}}
                              >
                                 <MaterialIcons name="message" style={{top: -2}} size={25} color="white" />
                                 <Image source={require('./../../Assets/Images/brand.png')} resizeMode='contain' style={{width: wp('40%'), height: 65}} />
                              </LinearGradient>
               
                  <MaterialCommunityIcons name="tune-vertical" style={{padding: 10}} size={30} color="black" />
               </View>  
               <View style={{justifyContent:'flex-start', flexDirection:'row', alignContent:"flex-start", alignItems:'center', alignSelf:'center', width: wp('70%'), top: 10}}>
                   <Text style={{ fontFamily:"Poppins-Regular",fontSize: hp("2.1%"),color: "#516091", textAlign:'left'}}>PINNED</Text>   
               </View>
            </View>
           
         }
         data={PINNED}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item, index }) => 
         <PinnedList
            Image={item.image} 
            Name={item.Name}
            Message={item.Message}
            UnReadMessage={item.UnReadMessage}
         />}
         keyExtractor={(item, index) => index}

         />
      )
   }
     
   
    return(
        <View style={{flex: 1, flexDirection:'column',  backgroundColor:'#f5f5f5', justifyContent:'center'}}>
            <StatusBar translucent backgroundColor="transparent" />
                           
                          <FlatList  
                         
                           bounces
                           bouncesZoom
                            maintainVisibleContentPosition
                            showsVerticalScrollIndicator={false}
                              nestedScrollEnabled
                              style={{}}
                              ListHeaderComponent={
                                 <View style={{ flexDirection:'column', justifyContent:'flex-start'}}> 
                                   <Header />
                                    <Pin />
                                    <View style={{justifyContent:'flex-start', flexDirection:'row', alignContent:"flex-start", alignItems:'center', alignSelf:'center', width: wp('70%'), top: 10}}>
                                       <Text style={{ fontFamily:"Poppins-Regular",fontSize: hp("2.1%"),color: "#516091", textAlign:'left'}}>OTHERS</Text>   
                                    </View>
                                 </View>
                              }
                              data={OTHER}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index }) => 
                              <PinnedList
                                 Image={item.image} 
                                 Name={item.Name}
                                 Message={item.Message}
                                 UnReadMessage={item.UnReadMessage}
                              />}
                              keyExtractor={(item, index) => index}
                     
                              />

            </View>
    )
 }

 export default Chats;