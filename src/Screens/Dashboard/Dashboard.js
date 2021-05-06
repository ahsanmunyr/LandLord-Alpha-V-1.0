import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import Services from './Services';
import ServicesVilla from './ServicesVilla';
import Appartments from './Appartments';
import Header from './../../Components/Header'
import AppText from './../../Components/AppText'
 const data = [
    {
       image: require('./../../Assets/Images/noun_home.png'),
       text: "Total Tenants",
       digits: "1,500"
    },
    {
      image: require('./../../Assets/Images/Path.png'),
      text: "Remaining Tenant Dues",
      digits: "25,000"
   },
   {
      image: require('./../../Assets/Images/noun_service.png'),
      text: "Number of Services",
      digits: "60+"
   },
 ]
 const data1 = [
   {
      image: require('./../../Assets/Images/1.png'),
      text: "Modern",
      description: "More than 504,326 House waiting for your rent or buy"
   },
   {
     image: require('./../../Assets/Images/2.png'),
     text: "Classic",
     description: "More than 504,326 House waiting for your rent or buy"
  },
  {
   image: require('./../../Assets/Images/1.png'),
   text: "Modern",
   description: "More than 504,326 House waiting for your rent or buy"
},
{
  image: require('./../../Assets/Images/2.png'),
  text: "Classic",
  description: "More than 504,326 House waiting for your rent or buy"
},
 
]

const data2 = [
   {
      image: require('./../../Assets/Images/3.png'),
      text: "Modern",
      description: "More than 504,326 House waiting for your rent or buy"
   },
   {
     image: require('./../../Assets/Images/4.png'),
     text: "Classic",
     description: "More than 504,326 House waiting for your rent or buy"
  },
  {
   image: require('./../../Assets/Images/3.png'),
   text: "Modern",
   description: "More than 504,326 House waiting for your rent or buy"
},
{
  image: require('./../../Assets/Images/4.png'),
  text: "Classic",
  description: "More than 504,326 House waiting for your rent or buy"
},
 
]

   const DashBoard = ({navigation}) => {
   const [searchQuery, setSearchQuery] = React.useState('');
   const onChangeSearch = query => setSearchQuery(query);
  
   
    return(
        <View style={{ backgroundColor:'#f5f5f5', flex: 1, justifyContent:'center', alignSelf:'center',}}>
            <StatusBar translucent backgroundColor="transparent" />
            {/* <SafeAreaView shouldRasterizeIOS style={{flexDirection:'column', justifyContent:'flex-start'}}> */}
               <ScrollView scrollEnabled showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                  <Header />
                  <View style={{ flexDirection:'column', justifyContent:'flex-start', alignItems:'center', alignContent:'center', alignSelf:'center'}}> 
                        <View style={{ 
                              flexDirection:'row',
                              justifyContent:'space-between',
                              alignItems:'center',
                               paddingLeft: 50, paddingRight: 50
                              }}>
                              <Searchbar
                                 placeholder="Search.."
                                 onChangeText={onChangeSearch}
                                 value={searchQuery}
                                 style={{borderRadius: 15, backgroundColor: '#fafafa',}}
                              />
                              <MaterialCommunityIcons name="tune-vertical" style={{padding: 10}} size={30} color="black" />
                        </View>
                        <View style={{height:hp('40%'), top: 10}}>
                        <FlatList
                              horizontal
                              data={data}
                              showsHorizontalScrollIndicator={false}
                              
                              renderItem={({ item, index }) => 
                              <Services 
                                 image={item.image} 
                                 text={item.text}
                                 digits={item.digits}
                              />}
                              keyExtractor={(item, index) => index}
                     
                              />
                        </View>
                        <View style={
                           {height:hp('45%'),
                            top: -70
                            
                            }}>
                           <View style={{ 
                              justifyContent:'space-between',
                              flexDirection:'row',
                              alignSelf:'auto',
                              paddingLeft: 50, paddingRight: 50
                                }}>
                                 <AppText family="Poppins-SemiBold" size={hp("2.8%")} color="black" Label="Empty Villas" />
                                 <Entypo name="dots-three-horizontal" style={{padding: 2}} size={30} color="black" />
                           </View>
                       
                        <FlatList 
                              style={{}}
                              horizontal
                              data={data1}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index }) => 
                              <ServicesVilla
                                 image={item.image} 
                                 text={item.text}
                                 description={item.description}
                              />}
                              keyExtractor={(item, index) => index}
                     
                              />
                        </View>
                        <View style={{height:hp('45%'), top: -40}}>
                           <View style={{ 
                                justifyContent:'space-between',
                                flexDirection:'row',
                                alignSelf:'auto',
                                paddingLeft: 50, paddingRight: 50
                              }}>
                                 <AppText family="Poppins-SemiBold" size={hp("2.8%")} color="black" Label="Empty Appartments" />
                                 <Entypo name="dots-three-horizontal" style={{padding: 2}} size={30} color="black" />
                           </View>
                       
                        <FlatList 
                              style={{}}
                              horizontal
                              data={data2}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index }) => 
                              <Appartments
                                 image={item.image} 
                                 text={item.text}
                                 description={item.description}
                              />}
                              keyExtractor={(item, index) => index}
                     
                              />
                        </View>
                        
                  </View>
               </ScrollView>
              {/* </SafeAreaView> */}
              <View style={{height: 50}}></View>
            </View>
    )
 }

 const styles = StyleSheet.create({
   scrollView: {
       
      // marginHorizontal: 20,
    },
 })
 export default DashBoard;