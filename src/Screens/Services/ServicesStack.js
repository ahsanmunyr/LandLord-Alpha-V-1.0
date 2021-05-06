import React, { Component, useEffect, useState } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Services from './Services'
import SBProfile from './List/SBProfile'
function ServicesStack(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="services">
                <Stack.Screen 
                    name="services" 
                    options={({ navigation, route }) => ({
                        headerTitle: props => null,
                        headerTransparent: true,
                        headerLeft: ()=> null,
                      })}
                    component={Services}
                />
                <Stack.Screen 
                    name="profile" 
                    options={{headerShown:false}} 
                    component={SBProfile}
                /> 
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ServicesStack