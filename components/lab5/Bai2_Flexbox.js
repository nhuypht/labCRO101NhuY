import React from 'react';
import { StatusBar, ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../assets/Colors';
import IMAGES from '../../assets/Images';

const Bai2_FlexBox = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={ IMAGES.QTHCM}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.text}> Quảng trường Hồ Chí Minh</Text>
          <Text style = {styles.title}>Năm 1991, tỉnh Nghệ Tĩnh tách ra thành Nghệ An và Hà Tĩnh. Khi tách ra, tỉnh Nghệ An có 18 đơn vị hành chính gồm thành phố Vinh (tỉnh lị) và 17 huyện: Anh Sơn, Con Cuông, Diễn Châu, Đô Lương, Hưng Nguyên, Kỳ Sơn, Nam Đàn, Nghi Lộc, Nghĩa Đàn, Quế Phong, Quỳ Châu, Quỳ Hợp, Quỳnh Lưu, Tân Kỳ, Thanh Chương, Tương Dương, Yên Thành.[4]
          </Text>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleTextButton}>Explore now!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 40,
    color: COLORS.GREEN,
    fontFamily: 'poppins-bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  styleButton: {
    width: 170,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginTop: 10
  },
  styleTextButton: {
    color: COLORS.HEX_BLACK,
    fontFamily: 'poppins-bold',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Bai2_FlexBox;
