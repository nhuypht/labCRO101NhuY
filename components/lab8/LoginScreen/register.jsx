import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../Util/Colors';

export  const Register =({navigation})=>{

    const [user,setUser] = useState({
        userName: '',
        passWord: '', 
        rpPass: ''
    });
    


    const handleSubmit = async () => {
         if(user.passWord !== user.rpPass) return Alert.alert('Resginter Error', 'Vui long nhap mat khau trung nhau');
         const ListData = await fetch('https://65e071b6d3db23f762495043.mockapi.io/admin');
         const data = await ListData.json();
          if( data.find((item) => item?.username == user.userName)) return Alert.alert('Resginter Error', 'User name da ton tai');
        try {
          const response = await fetch('https://65e071b6d3db23f762495043.mockapi.io/admin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: user.userName , password: user.passWord}),
          });
          const data = await response.json();
          data && Alert.alert('Resgiter', 'Chuc mung ban da dang ky thanh cong ^_^',  navigation.navigate('User'))
        } catch (error) {
          console.error('Đã xảy ra lỗi:', error);
        }

       
      };
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên đăng ký"
                value={user.userName}
                //Rest parameter // 
                onChangeText={(text => setUser({...user,userName:text}))}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                onChangeText={(text => setUser({...user,passWord:text}))}
            />
             <TextInput
                style={styles.input}
                placeholder="Nhập lại mật khẩu"

                onChangeText={(text => setUser({...user,rpPass:text}))}
            />

        <TouchableOpacity style={styles.button}
           onPress={()=> handleSubmit()}>
          <Text style={{textAlign:'center',fontSize:20, color:Colors.WHILE,}}> đăng ký </Text> 
        </TouchableOpacity>

        <View style={styles.View2}>
            <Text style={styles.Text}> bạn đã có tài khoản?
             <Text style={{color:Colors.PRYMARY}}
             onPress={()=> navigation.navigate('w')}
             >đăng nhập</Text>
             </Text>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.BLUE,
        color:'#000',

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
    Text:{
        color:Colors.BLUE,
    },
    View2:{
        marginTop:460,

    }


});