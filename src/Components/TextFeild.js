import React, {useEffect, useState,useRef} from 'react';
import {
    View, TextInput,StyleSheet
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 const TextInputFeild = ({placeholder, value, onchange, keyboardType, secureTextEntry,InApp, multiline,numberOfLines,maxLength}) => {
    return(
       
  
                
                <TextInput
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor={!InApp? 'white': 'grey'}
                    style={!InApp? styles.input: styles.inputInApp }
                    onChangeText={onchange}
                    value={value}
                    caretHidden={true}
                    secureTextEntry={secureTextEntry}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    maxLength={maxLength}
                />
             
    
            
             
    )
 }
 export default TextInputFeild;
 var styles = StyleSheet.create({
    input: {
      
        padding:5,
        top:-5,
        borderWidth: 0,
        color: 'white',
        width: wp('55%'),
        justifyContent: 'center',
        borderColor: 'white',
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
        fontSize: hp('1.8%'),
        
        
        
      },
      inputInApp: {
    
        padding:5,
        top:-5,
        borderWidth: 0,
        color: 'grey',
        width: wp('70%'),
        justifyContent: 'center',
        borderColor: 'white',
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
        fontSize: hp('1.8%'),
        textAlignVertical:'top'
        
        
      },
    textField: {
        width: wp('95%'),
        justifyContent: 'center',
        flexDirection: 'row',
        
        alignSelf:'center',
    },
})