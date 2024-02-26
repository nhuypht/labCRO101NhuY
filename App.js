import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './components/lab4/Bai3';
import { useFonts } from 'expo-font';
import Bai1_bottomtabs from './components/lab7/Bai1_bottomtabs';
import Home_Lab8 from './components/lab8/Home_Lab8';
import Home_Lab5 from './components/lab5/Home_Bai5';
import Bai1_Stack from './components/Lab6/Bai1_Stack';
export default function App() {
 
  return (
  
    // <Home_Lab5/>
    //<Bai1_Stack/>
    //<Bai1_bottomtabs/>
    <Home_Lab8/>

  ); 
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
 