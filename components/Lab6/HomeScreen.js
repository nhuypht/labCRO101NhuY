import { Button, TextInput, TouchableOpacity,Text, View } from 'react-native';
import {useState} from 'react';

function HomeScreen({navigation}) {
    const [enteredUser, setEnteredUser] = useState();
    function handleDetails() {
        navigation.navigate('Details', {
            user: enteredUser,
            id: Math.floor(Math.random() * 10000) ,
        });
    }
    return (
        <View>
            <Text style={{marginTop:20,}}>Màn hình chính</Text>
            <TextInput  placeholder='Enter your name' onChangeText={setEnteredUser} ></TextInput>
            <Button onPress={handleDetails} title='Đi tới màn hình chi tiết'></Button>
        </View>
    );
}

export default HomeScreen;