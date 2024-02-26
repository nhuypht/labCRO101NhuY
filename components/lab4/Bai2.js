import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  StyleSheet,
  Text
} from 'react-native';

const Bai2 = () => {
  const [barStyle, setBarStyle] = useState('default');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      // Thay đổi màu StatusBar khi tải lại hoàn tất
      setBarStyle('dark-content');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Đặt StatusBar ở đây để nó nằm trên cùng */}
     
      
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            // tintColor= // Màu của chữ "Kéo để tải lại"
            // title = "Đang tải lại..."
            titleColor='blue' // Màu của tiêu đề "Đang tải lại..."
            colors={['blue']} // Màu của vòng quay khi tải lại
          />
        }
      >
         <StatusBar
        translucent
        backgroundColor={'transparent'} // Màu của StatusBar khi không tải lại
        barStyle={barStyle} // Kiểu chữ của StatusBar
      />
        {/* Nội dung của ScrollView */}
      <Text style={{ color: 'black', textAlign: 'center', marginTop: 50, }}>Kéo xuống để thấy RefreshControl </Text>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#9A9A9A'
    // Thêm các style khác nếu cần thiết
  },
});

export default Bai2;
