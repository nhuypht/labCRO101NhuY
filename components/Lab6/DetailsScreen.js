import { Button, Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
function DetailsScreen({route,navigation}) {
    const resetNavi = () => navigation.dispatch(
        CommonActions.reset({
          
            routes: [
            { name: 'Home',},
            ]
        })
        );
    return (
       <View style ={{padding:30, textAlign: 'center'}}>
         <Text>
            Chào bạn, {route.params.user}
        </Text>
         <Text>
         id của bạn là, {route.params.id}
        </Text>

        <View style={{marginTop: 20,}}>
        <Button title="TRỞ LẠI BẰNG - GOBACK " onPress={navigation.goBack} />
        <Button title="TRỞ LẠI BẰNG - reset --- " onPress={resetNavi} />
        <Button title="TRỞ LẠI BẰNG - pop --- " onPress={() => navigation.pop()} />
        <Button title="TRỞ LẠI BẰNG - popToTop " onPress={() => navigation.popToTop()} />
        </View>
       </View>
    )
}
export default DetailsScreen;