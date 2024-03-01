import { FlatList } from "react-native";
import { getList } from "./userAPI";
import UserItem from "./UserItem";
import { useLayoutEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

function UserScreen({ navigation }) {
  const [userList, setUserList] = useState();

  function headerButtonPressHandler() {
    navigation.navigate("Add", { loadData: fetchData });
  }

  const fetchData = async () => {
    const data = await getList();
    if (data) {
      setUserList(data);
    }
  };
  useLayoutEffect(() => {
    fetchData();
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            onPress={headerButtonPressHandler}
            name="add-circle-outline"
            size={40}
            color="green"
          />
        );
      },
    });
  }, []);

  function renderUserItem(itemData) {
    function handlerUpdate() {
      navigation.navigate("Update", {
        userId: itemData.item.id,
        avatar: itemData.item.avatar,
        fullname: itemData.item.fullname,
        date: itemData.item.date,
      });
    }
    return (
      <UserItem
        navigation={navigation}
        userId={itemData.item.id}
        avatar={itemData.item.avatar}
        fullname={itemData.item.fullname}
        date={itemData.item.date}
        loadData={fetchData}
      />
    );
  }

  return (
    <FlatList
      data={userList}
      keyExtractor={(item) => item.id}
      renderItem={renderUserItem}
      inverted
    />
  );
}
export default UserScreen;
