import React, { Component, useEffect, useState } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import ForgotScreen from './Screens/ForgotScreen'
import HomeScreen from './Screens/HomeScreen'
import SBProfile from './Screens/Services/List/SBProfile'
import Header from './Components/Header.js'
function Route(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="main">
                <Stack.Screen 
                    name="home" 
                    options={({ navigation, route }) => ({
                        headerTitle: props => null,
                        headerTransparent: true,
                        headerLeft: ()=> null,
                      })}
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name="main" 
                    options={{headerShown:false}} 
                    component={MainScreen}
                /> 
                <Stack.Screen 
                    name="login" 
                    options={{headerShown:false}} 
                    component={LoginScreen}
                /> 
                <Stack.Screen 
                    name="signup" 
                    options={{headerShown:false}} 
                    component={SignupScreen}
                /> 
                <Stack.Screen 
                    name="forgot" 
                    options={{headerShown:false}} 
                    component={ForgotScreen}
                /> 
                {/* <Stack.Screen 
                    name="sbprofile" 
                    options={{headerShown:false}} 
                    component={SBProfile}
                />  */}
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route