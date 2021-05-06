import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import Logo from './../Components/Logo'
import { SocialIcon } from 'react-native-elements'
import TextInputFeild from './../Components/TextFeild'
import IconImage from './../Components/Icons'
import Underline from './../Components/Underline'
import Heading from './../Components/Heading'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextSample from './../Components/Text'
import BoldText from './../Components/BoldText'
import OTPTextView from 'react-native-otp-textinput';
 
import SquareTouchableOpacity from './../Components/SquareTouchableOpacity'
const SignupScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const otpInput = useRef(null);
    const [password, onChangePassword] = React.useState("");
    const [confirmPassword, onChangeConfirmPassword] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [stepOne, onChangestepOne] = React.useState(false);
    const [stepTwo, onChangestepTwo] = React.useState(false);
  

    const onSubmit=()=>{
        fadeChange()
       
    }
    const onSubmit2=()=>{
        fadeChange()
    }

    const fadeChange = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
          }).start();
          if(stepOne == false){
            onChangestepOne(true)
          }else if(stepTwo == false){
            onChangestepTwo(true)
          }
         
    }

    const showModal = () => {
        setModalVisible(true)
    }

    return(
        <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" />
         <ImageBackground style={styles.backgroundImage} source={require('./../Assets/Images/bg1.png')}>
             {/* <SafeAreaView shouldRasterizeIOS style={{height: hp('110%'),flexDirection:'column', justifyContent:'center'}}> */}
             <KeyboardAvoidingView styles={{height: hp('10%')}} behavior = 'padding'  enabled>
           
             <ScrollView scrollEnabled showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                 <View style={{ flexDirection:'column', height: hp('110%')}}> 
                 
                  <Logo />
                {
                    stepOne == false ?
                
                  <View style={{ justifyContent:"center", alignItems:'center'}}>
                        <View style={styles.innerContainer}>
                             <Heading Label="Sign Up" />
                             <TextSample color="white" Label="Please Enter Your Email & Phone Number To Sign Up" />
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

                                <View style={{flexDirection:"column", justifyContent:'center', margin: 15}}>
                                <View style={styles.textField}>
                                    <IconImage source={require('./../Assets/Images/lock.png')} />
                                    <TextInputFeild
                                        placeholder="Re-Enter Password"
                                        value={confirmPassword}
                                        onchange={onChangeConfirmPassword}
                                        keyboardType='default'
                                        secureTextEntry={true}
                                    />
                                </View>
                                    <Underline />
                                </View>
                             
                                <View style={{flexDirection: 'row', justifyContent:'center', margin: 10}}>
                                    <SquareTouchableOpacity
                                    backgroundColor="#FB6E19"
                                    onPress={onSubmit}
                                    title="Sign Up"
                                    />
                                </View>
                              <BoldText color="white" Label="OR"/>
                              <View style={{flexDirection: 'row', justifyContent:'center'}}>
                              <SocialIcon
                                    title='Facebook'
                                    button
                                    small
                                    iconSize={20}
                                    fontStyle={5}
                                    style={{padding: 15, width: wp('30%')}}
                                    type='facebook'
                                    />
                                <SocialIcon
                                    title='Google'
                                    button
                                    small
                                    iconSize={20}
                                    fontStyle={5}
                                    style={{padding: 15, width: wp('30%')}}
                                    type='google'
                                />
                              </View>
                            </View>   
                        </View>:   stepTwo == false && stepOne == true ? 
                        <Animated.View style={{opacity: fadeAnim}}>
                          <View style={{ justifyContent:"center", alignItems:'center'}}>
                              <View style={styles.innerContainer2}>
                                <Heading Label="Phone Verification" />
                                    <TextSample color="white" Label="Enter your OTP Code here" />
                              
                                 
                                      <OTPTextView
                                        handleTextChange={(e) => {}}
                                        containerStyle={styles.textInputContainer}
                                        textInputStyle={styles.roundedTextInput}
                                        inputCount={4}
                                        inputCellLength={1}
                                        />
                                 
                                <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('forgot')}>
                                        <BoldText color="white" Label="Resend OTP" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                    <SquareTouchableOpacity
                                    backgroundColor="#FB6E19"
                                    onPress={()=> navigation.navigate('home')}
                                    title="Loogin"
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
                          </Animated.View>: null

                    }
                   
                </View> 
            
              
                </ScrollView> 
                   
                
                </KeyboardAvoidingView>
             {/* </SafeAreaView> */}
         </ImageBackground>
         
        </View>
    )
}


export default SignupScreen;

var styles = StyleSheet.create({
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
    innerContainer2:{
        height: hp('60%'),
        width: wp('85%'),
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 38,
        padding: 20,
        justifyContent:'center',
        flexDirection:'column'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        height: hp('110%')
        
     
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
    textInputContainer: {
        marginBottom: 20,
        color: 'white'
    },
    roundedTextInput: {
        // borderRadius: 10,
        borderColor: 'white',
        // borderWidth: 1,
        // backgroundColor: '#FF3D46',
        color: 'white'
        
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 1,
        borderColor:'white',
        borderBottomWidth: 1,
      },
      underlineStyleHighLighted: {
        borderColor: "white",
      },
      borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "white",
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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