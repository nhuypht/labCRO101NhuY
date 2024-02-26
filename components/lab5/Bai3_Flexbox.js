import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import COLORS from '../../assets/Colors';
import IMAGES from '../../assets/Images';

const Bai3_FlexBox = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Image
          source={IMAGES.NgheAn}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.body}>
        <Text style = {styles.tripInfo}><Ionicons name="location-outline" size={30} color={COLORS.DARK_BLUE} /> Nghệ An</Text>
        <Text style = {{color: COLORS.BLACK, fontSize: 20, fontWeight: 'bold'}}>Thông Tin Chuyến Đi</Text>
        <Text style={styles.tripTitle} numberOfLines={6} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>$999/ngày</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heartIconContainer}>
        <View style={styles.heartCircle}>
          <TouchableOpacity>
            <Ionicons name="heart" size={30} color={COLORS.HEX_RED} />
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{...styles.headerIcon,top: '8%'}}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={25} color={COLORS.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={25} color={COLORS.WHITE} />
        </TouchableOpacity>
      </View>
      {/* title */}
      <View style = {{...styles.headerIcon, top: '51%'}}>
        <Text style = {styles.content}>Đảo Chè </Text>
        <Text style = {{color: COLORS.WHITE, fontSize: 18, fontWeight: 'bold'}}>
            <Image source={IMAGES.Star}/> 5.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: COLORS.WHITE,
  },
  header: {
    flex: 7,
  },
  headerImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  tripTitle: {
    overflow: 'hidden',
    fontSize: 17,
    paddingTop: 20,
    fontWeight: '400'
  },
  headerIcon: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tripInfo: {
    color: COLORS.DARK_BLUE,
    fontSize: 25,
    paddingTop: 15,
    fontWeight: '500',
    paddingBottom: 15
  },
  content: {
    fontSize: 30,
    fontFamily: 'poppins-bold',
    fontWeight: 'bold',
    color: COLORS.WHITE
  },
  body: {
    flex: 3,
    paddingHorizontal: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: '60%',
    width: '100%',
    height: '100%',
  },
  footer: {
    height: 60,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: COLORS.DARK_BLUE,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  bookButton: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  heartIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: [{ translateX: 35 }, { translateY: 50 }],
  },
  heartCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3, // Đối với Android, sử dụng thuộc tính elevation
  },
});

export default Bai3_FlexBox;

