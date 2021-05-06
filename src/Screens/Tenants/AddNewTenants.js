import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Header from './../../Components/Header'
 import TextInputFeild from './../../Components/TextFeild.js'
 import IconImage from './../../Components/Icons.js'
 import AppText from './../../Components/AppText'
 import SquareTouchableOpacity from './../../Components/SquareTouchableOpacity'
 const AddNewTenants = ({navigation}) => {
   const [name, onChangeName] = React.useState("");
   
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
         <Header header="Add New Tenants" wid={0.9} length={wp("55%")}  />
      
                                                    {/* <View style={{borderWidth:0, borderRadius:12, backgroundColor:'#fafafa'}}> */}
        <View style={{ margin: 10}}>
          <View style={styles.container}>
            
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/person.png')} />
                    <TextInputFeild
                                            placeholder="First Name"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/person.png')} />
                    <TextInputFeild
                                            placeholder="Last Name"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/phones.png')} />
                    <TextInputFeild
                                            placeholder="Phone #"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/mail.png')} />
                    <TextInputFeild
                                            placeholder="Email"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/building.png')} />
                    <TextInputFeild
                                            placeholder="Assigned Plot/Villa"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <View style={styles.innerContainer}>
                    <IconImage source={require('./../../Assets/Images/date.png')} />
                    <TextInputFeild
                                            placeholder="Moving Date"
                                            value={name}
                                            onchange={onChangeName}
                                            keyboardType='default'
                                            secureTextEntry={false}
                                            InApp={true}
                      />
                </View>
                <TouchableOpacity style={styles.innerContainerPM}>
                  <View style={{justifyContent:'flex-start', flexDirection: 'column'}}>
                    <AppText family="Poppins-Regular" size={hp("1.8%")} color="grey" Label="Payment Methods" />
                  </View>
                  <View style={{justifyContent:'flex-start', flexDirection: 'row'}}>
                    <Image resizeMode="contain"  source={require('./../../Assets/Images/stripe.png')} style={{height:50, width: 50, margin: 5}} />
                    <Image resizeMode="contain"  source={require('./../../Assets/Images/paypal.png')} style={{height:60, width: 60,}} />
                    <Image resizeMode="contain"  source={require('./../../Assets/Images/mastercard.png')} style={{height:40, width: 30,margin: 5, top:3}} />
                    <Image resizeMode="contain"  source={require('./../../Assets/Images/visa.png')} style={{height:50, width: 50,margin: 5}} />
                  </View>
                </TouchableOpacity>
                
              
                

                
          </View>

                      <View style={{flexDirection: 'row', justifyContent:'center', margin: 20,}}>
                                    <SquareTouchableOpacity
                                    backgroundColor="#FB6E19"
                                  
                                    title="Add Tenant"
                                    />
                      </View>
            <View style={{height: 100}}></View>
         </View>
          </ScrollView>
      </View>
    )
 }

 var styles = StyleSheet.create({
   container:{
    padding: 20,
    borderRadius:12,
    backgroundColor:'#fdfdfd',
   
    elevation: 10, 
    zIndex: 99999
   },

   innerContainer:{
    borderRadius: 12,
    borderWidth: 0,
    justifyContent: 'flex-start',
      flexDirection:'row', 
      backgroundColor: '#fdfdfd',
      padding: 10,
      height: 50,
      elevation: 10, 
      zIndex: 99999,
      margin: 10,
   },
   innerContainerPM:{
   
    borderRadius: 12,
    borderWidth: 0,
    justifyContent: 'flex-start',
      flexDirection:'column', 
      backgroundColor: '#fdfdfd',
      padding: 10,
      
      elevation: 10, 
      zIndex: 99999,
      margin: 10,
   }
 })
 export default AddNewTenants;