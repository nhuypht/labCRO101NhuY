import {  FlatList, StyleSheet} from 'react-native';
import DirectoryItem from './DirectoryItem';

const Bai1 = () => {
    const data = [
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Myah',
            occupation: 'Marketing',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Myah',
            occupation: 'Marketing',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Myah',
            occupation: 'Marketing',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Myah',
            occupation: 'Marketing',
        },
        {
            id: Math.random().toString(),
            image : 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
            name: 'Myah',
            occupation: 'Marketing',
        },
    ]
    return(
        <FlatList style ={styles.flatList} data={data}
        renderItem={(itemData) => {
         return <DirectoryItem id = {itemData.item.id} name={itemData.item.name} image = {itemData.item.image} occupation = {itemData.item.occupation}/>;
       }} 
        alwaysBounceVertical= {false} 
       keyExtractor={(item, index) =>
          {return item.id;
           }}
           >
         </FlatList>
    )
}
export default Bai1;
const styles = StyleSheet.create({
    flatList: {
      backgroundColor: '#F7F7F7',
    },
  });