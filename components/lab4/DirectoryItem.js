import React from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';

function DirectoryItem(props) {
  const handleCallPress = (phoneNumber) => {
    console.log('Calling ', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.textContainer}>
        <Text>{props.name}</Text>
        <Text>{props.occupation}</Text>
      </View>
      <Pressable  onPress={() => handleCallPress(props.phoneNumber)}>
        <Text style = {styles.callText} >Call</Text>
      </Pressable>
    </View>
  );
}

export default DirectoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 50, // Điều chỉnh kích thước hoặc tỷ lệ tùy thuộc vào thiết kế của bạn
    height: 50,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  callText : {
    color: 'green',
  }
});
