import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import Icon from 'react-native-vector-icons/EvilIcons';
 import SplashScreen from  "react-native-splash-screen";
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import DashBoard from './Dashboard/Dashboard'
 import Services from './Services/Services'
 import ServicesStack from './Services/ServicesStack'
 import ChatStack from './Chats/ChatStack'
 import TenantsStack from './Tenants/TenantsStack'
 import Tickets from './Tickets/TicketsStack.js'

 import AppText from './../Components/AppText'
//  import DashBoard from './Dashboard'
//  import DashBoard from './Dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

 const Tab = createMaterialBottomTabNavigator();

 function MyTabs() {
    

    return (
   
      <Tab.Navigator
        shifting={true}
        swipeEnabled={true}
        sceneAnimationEnabled={true}
        initialRouteName="DashBoard"
        activeColor="#00458A"
        inactiveColor="#00458A"
        backBehavior="initialRoute"
        labelStyle={{fontSize: 12}}
       
        style={{ 
            backgroundColor: '#f5f5f5',
            
            
                }}
        barStyle={{ 
            position:'absolute',
            borderColor:'#f5f5f5',
            paddingTop: 18,
            paddingBottom: 15,
            backgroundColor: 'white' ,
            borderWidth: 1,
            elevation: 10,
            zIndex: 999999,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            shadowOpacity: 1,
            shadowColor: "black",
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 3.32,
            shadowRadius: 5.46,
            borderTopWidth: -2,
            
         }}
      >
        <Tab.Screen
          name="DashBoard"
          component={DashBoard}
          options={{             
            tabBarLabel: "Dashboard",
            tabBarIcon: () => (
                
                <Image source={require('./../Assets/Images/dashboard.png')} resizeMode="contain"  />
            ),
            
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServicesStack}
          options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color }) => (
                <Image source={require('./../Assets/Images/services.png')} resizeMode="contain"  />
            ),
          }}
        />
        <Tab.Screen
          name="TenantsStack"
          component={TenantsStack}
          options={{
            tabBarLabel: 'Tenants',
            tabBarIcon: ({ color }) => (
                <Image source={require('./../Assets/Images/tenants.png')} resizeMode="contain"  />
            ),
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: ({ color }) => (
                <Image source={require('./../Assets/Images/tickets.png')} resizeMode="contain"  />
            ),
          }}
        />
         <Tab.Screen
          name="Chats"
          component={ChatStack}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ color }) => (
                <Image source={require('./../Assets/Images/chats.png')} resizeMode="contain"  />
            ),
          }}
        />
        
      </Tab.Navigator>
  
    );
  }

 const HomeScreen = ({navigation}) => {
     
    useEffect(() => {
        SplashScreen.hide();
      
       });
    return(
        <MyTabs/>
    )
 }

 export default HomeScreen;