import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import Logo from './../Components/Logo'
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInputFeild from './../Components/TextFeild'
import IconImage from './../Components/Icons'
import Underline from './../Components/Underline'
import Heading from './../Components/Heading'
import TouchableOpacityBtn from './../Components/TouchableOpacity'
import SquareTouchableOpacity from './../Components/SquareTouchableOpacity'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PhoneInput from "react-native-phone-number-input";
import TextSample from './../Components/Text'
import BoldText from './../Components/BoldText'
const LoginScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    return(
        <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" />
         <ImageBackground style={styles.backgroundImage} source={require('./../Assets/Images/bg1.png')}>
             {/* <SafeAreaView shouldRasterizeIOS style={{height: hp('110%'),flexDirection:'column', justifyContent:'center'}}> */}
             <KeyboardAvoidingView styles={{height: hp('10%')}} behavior = 'padding'  enabled>
          
             <ScrollView scrollEnabled showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                 <View style={{ flexDirection:'column', height: hp('80%'), justifyContent:'center', alignItems:'center', alignContent:'center', alignSelf:'center'}}> 
                  <Logo />
                    <View style={{ justifyContent:"center", alignItems:'center'}}>
                        <View style={styles.innerContainer}>
                             <Heading Label="Login" />
                             <TextSample color="white" color="white" Label="Please Enter Your Email Or Phone Number To Login" />
                             <View style={{flexDirection:"column", justifyContent:'center', margin: 15}}>
                                <View style={styles.textField}>
                                    <IconImage source={require('./../Assets/Images/email.png')} />
                                    <TextInputFeild
                                        placeholder="Email or Phone"
                                        value={email}
                                        onchange={onChangeEmail}
                                        keyboardType='default'
                                        secureTextEntry={false}
                                    />
                                </View>
                                    <Underline />
                                </View>
                                <View style={{flexDirection:"column", justifyContent:'center', margin: 15}}>
                                <View style={styles.textField}>
                                    <IconImage source={require('./../Assets/Images/lock.png')} />
                                    <TextInputFeild
                                        placeholder="Password"
                                        value={password}
                                        onchange={onChangePassword}
                                        keyboardType='default'
                                        secureTextEntry={true}
                                    />
                                </View>
                                    <Underline />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('forgot')}>
                                        <BoldText color="white"  Label="Forgot Password" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                    <SquareTouchableOpacity
                                    backgroundColor="#FB6E19"
                                    onPress={()=> navigation.navigate('signup')}
                                    title="Login"
                                    />
                                </View>
                                 <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
                                        <View style={{padding: 15, justifyContent:'center', flexDirection:'row'}}>
                                        
                                            <Text style={styles.touchableOpacityText}>Don't have account?</Text>
                                            <Text style={styles.touchableOpacityTexts}>  Sign up</Text>
                                        </View>
                                     
                                    </TouchableOpacity>
                                </View>
                            </View>   
                        </View>             
                    </View> 
                <View style={{ height:hp('20%'), justifyContent:'space-between', alignItems:'center' ,flexDirection: 'column', alignContent:'space-between', bottom: 30}}>
                        
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
             {/* </SafeAreaView> */}
         </ImageBackground>
        </View>
    )
}


export default LoginScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        height: hp('103%')
        
     
    },
    innerContainer:{
        // height: hp('60%'),
        width: wp('85%'),
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 38,
        padding: 20,
        justifyContent:'center',
        flexDirection:'column'
    },
    scrollView: {
       
        marginHorizontal: 20,
      },
    input: {
        height: 40,
        padding:10,
        borderWidth: 0,
        color: 'white',
        width: wp('80%'),
        justifyContent: 'center',
        borderColor: 'white',
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
        fontSize: hp('2%'),
        
        
        
      },
    textField: {
        width: wp('95%'),
        justifyContent: 'center',
        flexDirection: 'row',
        
        alignSelf:'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    touchableOpacity:{
        
        backgroundColor:"#FB6E19",
        width: wp('67%'),
        height: hp('6%'),
        justifyContent: 'center',
        borderRadius: 15
    },
    touchableOpacityText: {
      color: 'white',
    //   fontFamily: '' 
     fontFamily: 'Poppins-SemiBold',
      fontSize: hp('1.6%'),
      textAlign:'center'
    },
    touchableOpacityTexts: {
        color: '#5EDFFF',
      //   fontFamily: '' 
       fontFamily: 'Poppins-SemiBold',
        fontSize: hp('1.6%'),
        textAlign:'center'
      },
})