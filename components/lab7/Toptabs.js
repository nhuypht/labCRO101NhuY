import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons'; // Import thư viện icon
import { Text, View } from 'react-native';

// Import các màn hình cần chuyển đổi
import Bai1_Fonts from '../lab5/Bai1_Fonts';
import Bai2_FlexBox from '../lab5/Bai2_Flexbox';

export default function Toptabs() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'setting';
          }

          // Trả về biểu tượng phù hợp và văn bản trong một container View
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign name={iconName} size={24} color={color} />
              <Text style={{ color, marginLeft: 5 }}>{route.name}</Text>
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Bai1_Fonts} />
      <Tab.Screen name="Settings" component={Bai2_FlexBox} />
    </Tab.Navigator>
  );
}
