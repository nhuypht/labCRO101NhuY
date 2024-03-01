import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Util/Colors.js'
import { Register } from './register.jsx';
import { TextInput } from 'react-native-gesture-handler';

// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


const Dangnhap = ({navigation}) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');

  // call api 
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://65e071b6d3db23f762495043.mockapi.io/admin');
      const data = await response.json();
      const user = data.find((item) => item.username == username);
      user ? user?.password == password ? navigation.navigate('User') : Alert.alert('Login Error', 'Vui long kiem tra lai username and password ? ') : Alert.alert('Login Error', 'Vui long kiem tra lai username and password ? ')
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
   
  };
  return (
    <View style={{alignItems:'center'}}>
  
      <ImageBackground source={{uri : "https://i.pinimg.com/564x/f3/68/2b/f3682b3e1d77e057652069288b67942a.jpg"}} 
       style={styles.imageLogin} >

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên đăng nhập"
                
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                
                onChangeText={setPassword}
            />
            

        <TouchableOpacity style={styles.button}
           onPress={()=> handleSubmit()}>
          <Text style={{textAlign:'center',fontSize:20, color:Colors.WHILE,}}> đăng nhập </Text> 
        </TouchableOpacity>
        </View>

       </ImageBackground>
    

    </View>
  )
}

export default Dangnhap;

const styles = StyleSheet.create({
    imageLogin: {
        width:'100%',
        height: '100%',
        borderColor:'#000000',
        paddingBottom:0,
        borderRadius: 19,
        borderWidth:0,
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
      
    },
    input: {
      width: 320,
      height: 40,
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: Colors.BLUE,
      color:'#282635',
      


  },
  button:{
      marginTop:30,
      borderWidth:2,
      width:300,
      height:50,
      borderRadius:50,
      padding:7,
      backgroundColor:Colors.PRYMARY,
  },
  container: {
    flex: 1,
    marginTop:100,
    alignItems: 'center',
    padding: 20,
    marginBottom:0
},
})


{/* <View style={styles.subcontainer}>
<Text style={{fontSize:25,color:Colors.WHILE,textAlign:'center'}}>
   assignment rrrrrrrrrrrrrrrrr
</Text>

<Text style={{fontSize:15,color:Colors.WHILE,textAlign:'center',marginTop:20,}}>
 khjk</Text>

   <TouchableOpacity style={styles.button}
   onPress={()=> navigation.navigate('User')}>
  <Text style={{textAlign:'center',fontSize:20, color:Colors.PRYMARY,}}> đăng nhập </Text> 
</TouchableOpacity>

</View> */}