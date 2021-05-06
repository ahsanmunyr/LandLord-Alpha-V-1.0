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
import TextSample from './../Components/Text'
import TouchableOpacityBtn from './../Components/TouchableOpacity'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PhoneInput from "react-native-phone-number-input";
const ForgotScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState("");
   
    return(
        <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" />
         <ImageBackground style={styles.backgroundImage} source={require('./../Assets/Images/bg1.png')}>
             <SafeAreaView shouldRasterizeIOS style={{height: hp('110%'),flexDirection:'column', justifyContent:'center'}}>
             <KeyboardAvoidingView styles={{height: hp('10%')}} behavior = 'padding'  enabled>
          
             {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                 <View style={{ flexDirection:'column', height: hp('80%'), top: 20}}> 
                 
                  <Logo />
                  <Heading Label="Forgot" />
                  <Heading Label="Password" />
                  <TextSample Label="Enter Your Email For Password Verfication" />
                  <View style={{flexDirection:"column", justifyContent:'center', margin: 15}}>
                    <View style={styles.textField}>
                        <IconImage source={require('./../Assets/Images/email.png')} />
                        <TextInputFeild
                            placeholder="Email"
                            value={email}
                            onchange={onChangeEmail}
                            keyboardType='email-address'
                            secureTextEntry={false}
                        />
                    </View>
                        <Underline />
                    </View>
                    
                   
                </View> 
                
                <View style={{ height:hp('20%'), justifyContent:'space-between', alignItems:'center' ,flexDirection: 'column', alignContent:'space-between', bottom: 30}}>
                        <TouchableOpacityBtn  
                            onPress={()=> navigation.navigate('main')}
                            title="Continue"
                        />
                       
                </View>
                </ScrollView> */}
                </KeyboardAvoidingView>
             </SafeAreaView>
         </ImageBackground>
        </View>
    )
}


export default ForgotScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        height: hp('103%')
        
     
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
})