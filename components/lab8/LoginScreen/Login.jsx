import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Util/Colors.js'
import { createStackNavigator } from "@react-navigation/stack"



const Login = ({navigation}) => {
  return (
    <View style={{alignItems:'center'}}>
  
      <Image source={{uri : "https://i.pinimg.com/564x/f3/68/2b/f3682b3e1d77e057652069288b67942a.jpg"}} 
       style={styles.imageLogin} />
      <View style={styles.subcontainer}>
        <Text style={{fontSize:25,color:Colors.WHILE,textAlign:'center'}}>
           assignment
        </Text>

        <Text style={{fontSize:15,color:Colors.WHILE,textAlign:'center',marginTop:20,}}>
         quản lý data</Text>

        <TouchableOpacity style={styles.button}
           onPress={()=> navigation.navigate('Register')}>
          <Text style={{textAlign:'center',fontSize:20, color:Colors.PRYMARY,}}> bắt đầu </Text> 
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    imageLogin: {
        width:250,
        height: 450,
        borderColor:'#000000',
        marginTop:70,
        borderRadius: 19,
        borderWidth:4,
      },
    subcontainer:{
      width:'100%',
      backgroundColor:Colors.PRYMARY,
      height:'70%',
      marginTop:-20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20,

    },
    button:{
      padding:15,
      backgroundColor:Colors.WHILE,
      borderRadius:99,
      marginTop:20,
      
    }
})