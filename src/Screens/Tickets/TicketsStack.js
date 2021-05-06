import React, { Component, useEffect, useState } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ticket from './Tickets'
import TicketsForm from './TicketsForm'
function TicketsStack(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="tickets">
                <Stack.Screen 
                    name="tickets" 
                    options={({ navigation, route }) => ({
                        headerTitle: props => null,
                        headerTransparent: true,
                        headerLeft: ()=> null,
                      })}
                    component={Ticket}
                />
                <Stack.Screen 
                    name="ticketsForm" 
                    options={{headerShown:false}} 
                    component={TicketsForm}
                /> 
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TicketsStack