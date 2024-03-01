import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { deleteUser } from "./userAPI";
import { useNavigation } from "@react-navigation/native";
export default function UserItem({
  userId,
  avatar,
  fullname,
  date,
  loadData,
  navigation,
}) {
  console.log(avatar);
  // const navigation = useNavigation();
  const updateScreen = () =>
    navigation.navigate("Update", {
      userId: userId,
      avatar: avatar,
      fullname: fullname,
      date: date,
      loadData: loadData,
    });
  const userDetails = () =>
    navigation.navigate("UserDetails", {
      userId: userId,
      avatar: avatar,
      fullname: fullname,
      date: date,
    });

  const deleteUserHandler = async () => {
    await deleteUser(userId);
    await loadData();
  };
  return (
    <View>
      <Pressable style={styles.container} onPress={userDetails}>
        <View style={{ width: 100, marginTop: 40 }}>
          <Image style={styles.img} source={{ uri: avatar }} />
        </View>

        <View styles={styles.textContainer}>
          <Text style={{ marginLeft: 20, marginTop: 20 }}>{fullname}</Text>
          <Text style={{ marginLeft: 20 }}>{date}</Text>

          <View style={styles.buttons}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
                { backgroundColor: "#BA6AEF" },
              ]}
              android_ripple={{ color: "#cccccc" }}
              onPress={updateScreen}
            >
              <Text>Sửa thông tin</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
              ]}
              android_ripple={{ color: "#cccccc" }}
              onPress={deleteUserHandler}
            >
              <Text style={styles.xoa}>Xoá</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
  textContainer: {
    maxWidth: 50,
    height: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#000000",
    objectFit: "contain",
    marginRight: 10,
  },
  img: {
    width: 100,
    height: 100,
    objectFit: "cover",
    alignItems: "center",
    borderRadius: 50,
  },
  buttons: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    padding: 20,
    margin: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    color: "#ccc",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  xoa: {
    backgroundColor:'red',
  }
});
