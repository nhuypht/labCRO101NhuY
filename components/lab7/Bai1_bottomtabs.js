import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, View} from 'react-native';
import IMAGES from '../../assets/Images';
import Toptabs from './Toptabs';
import Bai2_FlexBox from '../lab5/Bai2_Flexbox';
import Bai3_FlexBox from '../lab5/Bai3_Flexbox';
const Tab = createBottomTabNavigator();
const Bai1_bottomtabs = () => {
    return (
         <NavigationContainer>
             <StatusBar hidden />
           <Tab.Navigator initialRouteName='Bai1_Fonts' screenOptions={{headerShown: false}}>
                <Tab.Screen name='Bai1_Fonts' component={Toptabs}
                    options={{
                        title: "screen 1",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>
                <Tab.Screen name='Bai2_FlexBox' component={Bai2_FlexBox}
                    options={{
                        title: "screen 2",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>  
                <Tab.Screen name='Bai3_FlexBox' component={Bai3_FlexBox}
                    options={{
                        title: "screen 3",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>           

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Bai1_bottomtabs;