import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import { Register } from "./register";
import Dangnhap from "./dangnhap";
import UserScreen from "../UserScreen";
import UpdateScreen from "../UpdateScreen";
import UserDetails from "../UserDetails";
import AddScreen from "../AddScreen";

export default function NavHome() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="intro" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="w" component={Dangnhap} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Update" component={UpdateScreen}/>
        <Stack.Screen name="UserDetails" component={UserDetails}/>
        <Stack.Screen name="Add" component={AddScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
