import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Image, Text } from 'react-native';
import { updateUser } from './userAPI';
export default function UpdateScreen({ route, navigation }) {
    const { userId, avatar, fullname, date, loadData } = route.params;
    const [updatedAvatar, setUpdatedAvatar] = useState(avatar);
    const [updatedFullname, setUpdatedFullname] = useState(fullname);
    const [updatedDate, setUpdatedDate] = useState(date);

    const handleUpdate = () => {
        if(updatedAvatar && updatedFullname && updatedDate){
            updateUser(userId,{
                id: userId,
                fullname: updatedFullname,
                date: updatedDate,
                avatar: updatedAvatar,
            });
            loadData();
            // Sau khi cập nhật xong, quay lại màn hình trước đó
            navigation.goBack();
        }else{
            Alert.alert('Vui lòng nhập đủ thông tin');
        }

 
    };

    return (
        <View style={styles.container}>
            <Text>Link image</Text>
            <TextInput
                style={styles.input}
                placeholder="Avatar"
                value={updatedAvatar}
                onChangeText={setUpdatedAvatar}
            />
            <Text>Fullname</Text>
            <TextInput
                style={styles.input}
                placeholder="Fullname"
                value={updatedFullname}
                onChangeText={setUpdatedFullname}
            />
            <Text>Date</Text>
            <TextInput
                style={styles.input}
                placeholder="Date"
                value={updatedDate}
                onChangeText={setUpdatedDate}
            />
            <Button title="Cập nhật" onPress={handleUpdate} />
        </View>
    );
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
