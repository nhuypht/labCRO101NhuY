import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./components/lab4/Bai3";
import { useFonts } from "expo-font";
import Bai1_bottomtabs from "./components/lab7/Bai1_bottomtabs";
import Home_Lab8 from "./components/lab8/Home_Lab8";
import Home_Lab5 from "./components/lab5/Home_Bai5";
import Bai1_Stack from "./components/Lab6/Bai1_Stack";
import Bai1 from "./components/lab4/Bai1";
import Login from "./components/lab8/LoginScreen/Login";
import NavHome from "./components/lab8/LoginScreen/navHome";
export default function App() {
  return (
    <NavHome />

    // <Home_Lab8 />
    // <Bai1/>
    //  <LoginScreen/>
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
