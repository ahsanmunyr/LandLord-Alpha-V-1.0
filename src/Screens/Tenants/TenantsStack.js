import React, { Component, useEffect, useState } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewTenants from './AddNewTenants'
import ListOfTenants from './ListOfTenants'
import Tenants from './Tenants'
import TenantsPendingDues from './TenantsPendingDues'
function TenantsStack(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="tenants">
                <Stack.Screen 
                    name="tenants" 
                    options={({ navigation, route }) => ({
                        headerTitle: props => null,
                        headerTransparent: true,
                        headerLeft: ()=> null,
                      })}
                    component={Tenants}
                />
                <Stack.Screen 
                    name="addNewTenants" 
                    options={{headerShown:false}} 
                    component={AddNewTenants}
                /> 
                 <Stack.Screen 
                    name="listOfTenants" 
                    options={{headerShown:false}} 
                    component={ListOfTenants}
                /> 
                 <Stack.Screen 
                    name="tenantsPendingDues" 
                    options={{headerShown:false}} 
                    component={TenantsPendingDues}
                /> 
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TenantsStack