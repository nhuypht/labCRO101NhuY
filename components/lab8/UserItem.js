import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { deleteUser } from "./userAPI";
import { useNavigation } from "@react-navigation/native";
export default function UserItem ({userId,avatar,fullname,date,loadData,navigation}) {
    // const navigation = useNavigation();
    const updateScreen = () => navigation.navigate('Update', {
        userId: userId,
        avatar: avatar,
        fullname: fullname,
        date: date,
        loadData: loadData,
    });
    const userDetails = () => navigation.navigate('UserDetails', {
            userId: userId,
            avatar: avatar,
            fullname: fullname,
            date: date
        });
    const deleteUserHandler = async () => {
         await deleteUser(userId);
        await loadData();
    }
    return(
        <View>
            <Pressable style={styles.container} onPress={userDetails}>
            <Image style={styles.img} source={ {uri : avatar}} />
           <View styles ={styles.textContainer}>
           <Text>{fullname}</Text>
            <Text>{date}</Text>
           </View>
            <View style= {styles.buttons}>
            <Pressable
               style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
                {backgroundColor: 'green'}
              ]}
            android_ripple={{color: '#cccccc'}} 
            onPress={updateScreen}
            >
            <Text>Sửa thông tin</Text>
            </Pressable>
            <Pressable
               style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
              ]}
            android_ripple={{color: '#cccccc'}} 
            onPress={deleteUserHandler}
            >
                <Text>Xoá</Text>
            </Pressable>
            </View>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
    },
    textContainer : {
        
    },
    img : {
        width: 100,
        height: 100,
        objectFit: 'cover',
        borderRadius: 50,
        margin: 10,
    },
    buttons: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        padding: 10,
        borderRadius: 5,
      },
      buttonPressed: {
        opacity: 0.5,
      },
})