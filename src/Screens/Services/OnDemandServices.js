import React, {useEffect, useState,useRef} from 'react';
import {
   TouchableOpacity, View,Text,ImageBackground,StyleSheet,StatusBar,SafeAreaView,FlatList,
   Image,KeyboardAvoidingView,LayoutAnimation,Platform,UIManager,Animated,TouchableHighlight,TextInput,ScrollView
 } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';//building
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './../../Components/Header'
import AppText from './../../Components/AppText'

import AppHeading from './../../Components/AppHeading'
import UnderlineApp from './../../Components/UnderlineApp'
import ODList from './List/ODList'
const data = [
    {
        Name: "Cleaner",
        Image: require('./../../Assets/Images/a1.png'),
        Duration: "Per Day/Hr",
        AED: "20",
    },
    {
        Name: "Electrician",
        Image: require('./../../Assets/Images/a5.png'),
        Duration: "Per Day/Hr",
        AED: "20",
    },
    {
        Name: "Plumber",
        Image: require('./../../Assets/Images/a7.png'),
        Duration: "Per Day/Hr",
        AED: "20",
    },
    {
        Name: "Cook",
        Image: require('./../../Assets/Images/a4.png'),
        Duration: "Per Day/Hr",
        AED: "20",
    },
]


const OnDemandServices = ({navigation}) => {
    return(
        
            <View style={{padding:30, top: -20}}>
           <View style={{paddingBottom: 10}}>
                <AppHeading label={"On Demand Services"} />
                <UnderlineApp wid={0.9} length={wp("65%")} />
            </View>
             
  
                <FlatList 
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    extraData={[]}
                    ListEmptyComponent={null}
                    ListFooterComponent={<View style={{height: 100}}></View>} 
                    data={data}
                    
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => 
                            <ODList 
                                Name={item.Name}
                                Image={item.Image}
                                Duration={item.Duration}
                                Aed={item.AED}
                            />
                    }
                    
                        />
                <View style={{height: '30%'}}></View>
           
            </View>
       
    )
}

export default OnDemandServices