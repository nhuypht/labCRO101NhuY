import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from './UserScreen';
import UpdateScreen from './UpdateScreen';
import UserDetails from './UserDetails';
import AddScreen from './AddScreen';
export default function Home_Lab8 () {
  const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="Update" component={UpdateScreen}/>
                <Stack.Screen name="UserDetails" component={UserDetails}/>
                <Stack.Screen name="Add" component={AddScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
