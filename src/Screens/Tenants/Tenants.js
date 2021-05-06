import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../Components/Header'
 import AppText from './../../Components/AppText'
 import LinearGradient from 'react-native-linear-gradient'
 import All from './List/All'
 import New from './List/New'
 import Old from './List/Old'
 import { ButtonGroup } from 'react-native-elements';
 const data = [
    {
       image: require('./../../Assets/Images/list.png'),
       text: "List of Tenants",
      
    },
    {
      image: require('./../../Assets/Images/add.png'),
      text: "Add New Tenant",
      
   },
   {
      image: require('./../../Assets/Images/aed.png'),
      text: "Tenants Pending Dues",
     
   },
 ]




 const Tenants = ({navigation}) => {
    const [index, onChangeIndex] = React.useState(0);
    const buttons = ['All', 'New', 'Old']
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
            <Header header="Tenants" wid={0.9} length={wp("24%")}  />
              
               
            <View style={{ flexDirection:'column', justifyContent:'flex-start', alignItems:'center', alignContent:'center', alignSelf:'center'}}> 
                     
                     <View style={{height:hp('25%')}}>
                        
                             <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                nestedScrollEnabled
                                showsVerticalScrollIndicator={false}
                                scrollIndicatorInsets={false}
                                scrollEnabled
                                >
                        
                            <View style={{flexDirection:'row', padding: 10}}>
                                <TouchableOpacity onPress={()=> navigation.navigate('listOfTenants')}>
                                <LinearGradient
                                    start={{ x: -1, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={[ '#0044F2','#4EA5F6']}
                                    style={Styles.linearGradient}
                                    >
                                        <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                            <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/list.png')} />
                                            <View style={{width: wp('30%'), marginTop:10}}>
                                                <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="List of Tenants" />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row', padding: 10}}>
                                <TouchableOpacity onPress={()=> navigation.navigate('addNewTenants')}>
                                <LinearGradient
                                    start={{ x: -1, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={[ '#0044F2','#4EA5F6']}
                                    style={Styles.linearGradient}
                                    >
                                        <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                            <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/add.png')} />
                                            <View style={{width: wp('30%'), marginTop:10}}>
                                                <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="Add New Tenant"/>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row', padding: 10}}>
                                <TouchableOpacity onPress={()=> navigation.navigate('tenantsPendingDues')}>
                                <LinearGradient
                                    start={{ x: -1, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    colors={[ '#0044F2','#4EA5F6']}
                                    style={Styles.linearGradient}
                                    >
                                        <View style={{justifyContent:'center', flexDirection:'column', width:wp('40%'), height:hp('25%'), alignItems:'center'}}>
                                            <Image resizeMode="contain" style={{height:35, width: 35, }} source={require('./../../Assets/Images/aed.png')} />
                                            <View style={{width: wp('30%'), marginTop:10}}>
                                                <AppText textAlign="center"  family="Poppins-SemiBold" size={hp("2.0%")} color="white" Label="Tenants Pending Dues" />
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                     
                            </ScrollView>
                           
                            </View>
            </View>
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
                                <View style={{flex: 1}}>
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

const Styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 150,
        width: 150,
      },
})
 export default Tenants;