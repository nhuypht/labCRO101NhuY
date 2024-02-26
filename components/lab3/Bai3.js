import React, { useState } from 'react';
import { View, Text, Modal, Button, Alert, Image } from 'react-native';

const ModalComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleBackButton = () => {
    Alert.alert(
      'Thông báo',
      'Bạn đã tắt modal bằng nút back của thiết bị',
      [{ text: 'OK', onPress: hideModal }]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Hiển thị Modal" onPress={showModal} />

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={handleBackButton}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              justifyContent: 'center',
            alignItems: 'center',
            }}
          >
        <Image style = {{width: 100, height:100,}}     source={{
          uri: 'https://product.hstatic.net/1000306633/product/anh_1_d06f17b379d74b798d7ca14c13a7a881.jpg',
        }}/>
            <Text>Đây là nội dung của Modal</Text>
            <Button title="Ẩn Modal" onPress={hideModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
