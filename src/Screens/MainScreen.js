import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,
   Image,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,ScrollView
 } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TouchableOpacityBtn from './../Components/TouchableOpacity'
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }


 const MainScreen  = ({navigation}) => {
    const moveToTop = useRef(new Animated.ValueXY({ x: 10, y: 300 })).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [expanded, setExpanded] = useState(false);
    // const [position, setposition] = useState('center');

    useEffect(() => {
     SplashScreen.hide();
     changePosition()
     fadeChange()
    });

    const changePosition = () => {
       
        Animated.timing(moveToTop, {
            toValue: {x: 0, y: 100},
            duration: 1500,
            useNativeDriver: false
          }).start();
    };

    const fadeChange = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
          }).start();
    }
   
   return (
     <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" />
         <ImageBackground style={styles.backgroundImage} resizeMode='stretch' source={require('./../Assets/Images/bg.png')}>
         <ScrollView scrollEnabled showsVerticalScrollIndicator={false} >
             
             <Animated.View style={styles.outerContainer}>
                <Animated.View style={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.imageLogo} resizeMode="contain" source={require('./../Assets/Images/brand.png')}  />
                </Animated.View>

                <Animated.View style={styles.innerContainer}>
                    <TouchableOpacityBtn  
                        backgroundColor="black"
                        onPress={()=> navigation.navigate('login')}
                        title="LandLord"
                    />
                </Animated.View>
                <Animated.View style={styles.innerContainer}>
                <TouchableOpacityBtn  
                        backgroundColor="#FB6E19"
                        onPress={()=> navigation.navigate('signup')}
                        title="Tenants"
                    />
                </Animated.View>
                
             </Animated.View>
             </ScrollView>
         </ImageBackground>
     </View> 
  );
 };
 
 var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        
     
    },
    touchableOpacity:{
        
        borderWidth: 2,
        borderColor: 'white',
        width: wp('60%'),
        height: hp('6%'),
        justifyContent: 'center',
        borderRadius: 25
    },
    touchableOpacityText: {
      color: 'white',
    //   fontFamily: '' 
    fontFamily: 'Poppins-Regular',
      fontSize: hp('2'),
      textAlign:'center'
    },
    innerContainer:{
        flexDirection: 'column',
        justifyContent:'space-between',
        marginTop: 35
    },
    backgroundImage: {
        flex: 1,
         // or 'stretch'
    },
    imageLogo: {
        width: wp('70%'),
        height: hp('35%'), 
      
    },
    outerContainer:{
        alignSelf:'center', 
        width: wp('80%'),
         height: hp('70%') ,
          justifyContent:'center', 
          flexDirection:'column',
            alignItems:'center', 
            flex:1, 
    },
    icons:{
        width: 60, height: 60 
    }

   
});
 
 export default MainScreen;