import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text, Alert } from 'react-native';
import { addUser } from './userAPI';
export default function AddScreen({route,navigation}) {
    const {loadData} = route.params;
    const [addAvatar, setaddAvatar] = useState();
    const [addFullname, setaddFullname] = useState();
    const [addDate, setaddDate] = useState();
    function handleAddUser() {
        if(addAvatar && addFullname && addDate){
            addUser(
                {
                    fullname: addFullname,
                    date: addDate,
                    avatar: addAvatar,
                }
            );
            loadData();
            navigation.goBack();
            
        }else{
            Alert.alert('Vui lòng nhập đủ thông tin');
        }


    }
    return(
        <View style={styles.container}>
            <Text>Link image</Text>
            <TextInput
                style={styles.input}
                placeholder="Avatar"
                value={addAvatar}
                onChangeText={setaddAvatar}
            />
            <Text>Fullname</Text>
            <TextInput
                style={styles.input}
                placeholder="Fullname"
                value={addFullname}
                onChangeText={setaddFullname}
            />
            <Text>Date</Text>
            <TextInput
                style={styles.input}
                placeholder="Date"
                value={addDate}
                onChangeText={setaddDate}
            />
            <Button title="Thêm user" onPress={handleAddUser } />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
