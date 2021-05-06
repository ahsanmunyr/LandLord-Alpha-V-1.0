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
import SBSList from './List/SBSList'
const data = [
    {
        Name: "Internet",
        Image: require('./../../Assets/Images/a9.png'),
        Duration: "Per Month",
        AED: "20",
    },
    {
        Name: "Cable",
        Image: require('./../../Assets/Images/a2.png'),
        Duration: "Per Month",
        AED: "20",
    },
    {
        Name: "Electricity",
        Image: require('./../../Assets/Images/a6.png'),
        Duration: "Per Month",
        AED: "20",
    },
    {
        Name: "Water",
        Image: require('./../../Assets/Images/a8.png'),
        Duration: "Per Month",
        AED: "20",
    },
]


const SubscriptionBasedServices = ({navigation}) => {
    return(
        
            <View style={{padding:20, top: -20}}>
             <View style={{paddingBottom: 10, left: 10}}>
                    <AppHeading label={"Subscription Based Services"} />
                    <UnderlineApp wid={0.9} length={wp("80%")} />
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
                            <SBSList 
                                Name={item.Name}
                                Image={item.Image}
                                Duration={item.Duration}
                                Aed={item.AED}
                            />
                    }
                    
                        />
         
           
            </View>
       
    )
}

export default SubscriptionBasedServices