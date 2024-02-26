import React from 'react';
import { Button, StyleSheet,  View, Image, Text } from 'react-native';
export default function UserDetails({ route, navigation }) {
    const { userId, avatar, fullname, date } = route.params;
    const handleGoBack = () => {
        navigation.goBack(); // Đổi đây
    };
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri:avatar }} />
          <View style={styles.textContainer}>
          <Text style={{fontSize:20, fontWeight: 'bold', color: '#40A2D8', textAlign: 'center' }}>{fullname}</Text>
          <Text style={{fontSize:15,  textAlign: 'center' }}>ID: {userId}</Text>
          <Text style={{fontSize:15,  textAlign: 'center' }}>Date: {date}</Text>
          </View>
          <Button title='Quay lại' onPress={handleGoBack} />
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
    textContainer: {
        height: 130,
        justifyContent: 'space-around'
    },
    image: {
        width: 300,
        height:300,
        borderRadius: 200,
    }
});
