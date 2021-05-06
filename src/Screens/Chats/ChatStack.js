import React, { Component, useEffect, useState } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from './Chats'
function ChatStack(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="chat">
                <Stack.Screen 
                    name="chat" 
                    options={({ navigation, route }) => ({
                        headerTitle: props => null,
                        headerTransparent: true,
                        headerLeft: ()=> null,
                      })}
                    component={Chats}
                />
 
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ChatStack