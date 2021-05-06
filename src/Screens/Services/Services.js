import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
import Header from './../../Components/Header'
import AppText from './../../Components/AppText'
import ServicesBooked from './ServicesBooked'
import OnDemandServices from './OnDemandServices'
import SubscriptionBasedServices from './SubscriptionBasedServices'

const Services = ({navigation}) => {
const [index, onChangeIndex] = React.useState(1);
const [searchQuery, setSearchQuery] = React.useState('');
const onChangeSearch = query => setSearchQuery(query);
  
   
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
            <Header header="Services" wid={0.9} length={wp("24%")}  />
              
           
                  <View style={{ flexDirection:'column', justifyContent:'flex-start', alignItems:'center', alignContent:'center', alignSelf:'center'}}> 
                     
                        <View style={{height:hp('25%')}}>
                         <ScrollView  
                         nestedScrollEnabled
                         showsVerticalScrollIndicator={false}
                         showsHorizontalScrollIndicator={false}
                         scrollIndicatorInsets={false}
                         scrollEnabled
                        horizontal={true}  >
                       
                       
                         
                                <View style={styles.servicesBox}>
                                       <TouchableOpacity onPress={()=> {
                                          onChangeIndex(1)
                                          }}>
                                       <LinearGradient
                                          start={{ x: -1, y: 0 }}
                                          end={{ x: 1, y: 0 }}
                                          colors={index != 1 ? [ '#0044F2','#4EA5F6']: ['red', 'orange']}
                                          style={styles.linearGradient}
                                          >
                                          <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                                   <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/noun_service.png')} />
                                                   <View style={{width: wp('30%'), marginTop:10}}>
                                                      <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="Services Booked" />
                                                   </View>
                                                
                                          </View>
                                       </LinearGradient>
                                       </TouchableOpacity>
                                 </View>
                                 <View style={{flexDirection:'row', padding: 5, left:  10, paddingRight: 20}}>
                                       <TouchableOpacity onPress={()=> {
                                          onChangeIndex(2)
                                          }}>
                                       <LinearGradient
                                          start={{ x: -1, y: 0 }}
                                          end={{ x: 1, y: 0 }}
                                          colors={index != 2 ? [ '#0044F2','#4EA5F6']: ['red', 'orange']}
                                          style={styles.linearGradient}
                                          >
                                          <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                                   <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/Path.png')} />
                                                   <View style={{width: wp('30%'), marginTop:10}}>
                                                      <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="On Demand Services" />
                                                   </View>
                                          </View>
                                       </LinearGradient>
                                       </TouchableOpacity>
                                 </View>
                                 <View style={{flexDirection:'row', padding: 5, left:  10, paddingRight: 20}}>
                                       <TouchableOpacity onPress={()=> {
                                            onChangeIndex(3)
                                          }}>
                                       <LinearGradient
                                          start={{ x: -1, y: 0 }}
                                          end={{ x: 1, y: 0 }}
                                          colors={index != 3 ? [ '#0044F2','#4EA5F6']: ['red', 'orange']}
                                          style={styles.linearGradient}
                                          >
                                          <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                                   <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/noun_subscription.png')} />
                                                   <View style={{width: wp('30%'), marginTop:10}}>
                                                      <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="Subscription Based Services" />
                                                   </View>
                                          </View>
                                       </LinearGradient>
                                       </TouchableOpacity>
                                 </View>
                        </ScrollView>
                        </View> 
                        
                  </View>   
                   
               <View style={{flex:1}}>
               {
                                 index == 1 ?
                                 <ServicesBooked navigation={navigation}/>: 
                                 index == 2 ?
                                 <OnDemandServices navigation={navigation}/>: 
                                 index == 3 ?
                                 <SubscriptionBasedServices navigation={navigation}/>: 
                                 null
                              }
               </View>    
               </ScrollView>               
            </View>
    )
 }

 const styles = StyleSheet.create({
   scrollView: {
       
      // marginHorizontal: 20,
    },
    servicesBox:{
      flexDirection:'row', padding: 5, left:  10, paddingRight: 20, borderRadius: 12
    },
    linearGradient: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              height: 150,
              width: 150,
            },
 })
 export default Services;



 