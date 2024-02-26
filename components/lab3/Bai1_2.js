import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


const ViewComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return(
     <View >

            <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nhập họ tên"
            style ={styles.tipStyle}
            />

            <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            style ={styles.tipStyle}
            />

            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Nhập mật khẩu"
            secureTextEntry = {true}
            style ={styles.tipStyle}
            />

           <View style={styles.container}>
                <Text style = {styles.baseText}>
                    Em vào đời bằng {' '}
                    <Text style= {[styles.boldText, colorText('red')]}>vang đỏ</Text> 
                    Anh vào đời bằng {' '} <Text style= {[styles.boldText, colorText('yellow')]}>nước trà</Text>
                </Text>

                <Text style = {styles.baseText}>
                    Bằng cơn mưa thơm{' '}
                    <Text style= {[styles.boldText, sizeText(20), styles.italicText]}>
                        mùi đất{' '}
                    </Text >{' '}
                    và{' '}
                    <Text style = {[sizeText(10), styles.italicText]}>
                        bằng hoa dại mọc trước nhà
                    </Text>
                </Text>

                <Text 
                style = {[
                    styles.baseText,
                    styles.italicText,
                    styles.boldText,
                    colorText('gray')
                ]}>
                Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
                </Text>

                <Text    style={styles.baseText}>
                    Lý trí em là{' '}
                    <Text
                    style ={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}>
                        {' '}
                        công cu{' '}
                    </Text>
                    còn trái tim anh là
                    <Text 
                    style = {styleText({
                        textDecorationLine:'underline',
                        letterSpacing:20,
                        fontWeight: 'bold',
                    })}>
                    {' '}
                    động cơ{' '}
                    </Text>
                </Text>

                <Text
                    style= {[
                        styles.baseText,
                        styleText({
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'orange',
                        }),
                    ]}>
                    Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
                </Text>

                <Text
                    style = {[
                        styles.baseText,
                        styleText({
                            fontWeight: 'bold',
                            color:'black',
                        }),
                    ]}>
                    Em vào đời bằng <Text style = {colorText('white')}> mây trắng </Text> em 
                    vào đời bằng <Text style = {colorText('yellow')}> nắng xanh</Text>
                </Text>

                <Text
                    style = {[
                        styleText({
                            fontWeight: 'bold',
                            color: 'black',
                        }),
                    ]}>
                        Em vào đời bằng <Text style ={colorText('yellow')}> đại lộ </Text> và con
                        đường đó giờ <Text style = {colorText('white')}> vắng anh</Text>
                    </Text>
                </View>
     </View>
    )
}
const colorText = (color) => {
    return { color };
  };
  
  const sizeText = (fontSize) => {
    return { fontSize };
  };
  
  const styleText = (styles) => {
    return styles;
  };
  
export default ViewComponent;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignSelf:' center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    tipStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        marginHorizontal: 15,
        marginTop:10,
    },
})
    