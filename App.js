import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Mylab3 from "./src/screen/lab3";

export default function App() {
  return <Mylab3 />;
}

const StyleS = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: "red",
  },
});

// const class1 = [
//   {
//     code: "PS0000",
//     name: "Nguyễn Văn A",
//     avgPoint: 8.9,
//     avgTPoin: 9,
//     status: "pass",
//   },
//   {
//     code: "PS0001",
//     name: "Nguyễn Văn B",
//     avgPoint: 4.9,
//     avgTPoin: 44,
//     status: "pass",
//   },
// ];

// const class2 = [
//   {
//     code: "PS0002",
//     name: "Nguyễn Văn C",
//     avgPoint: 4.1,
//     avgTPoin: 10,
//     status: "failed",
//   },
//   {
//     code: "PS0003",
//     name: "Nguyễn Văn D",
//     avgPoint: 10,
//     avgTPoin: 5,
//     status: "pass",
//   },
//   {
//     code: "PS0004",
//     name: "Nguyễn Văn E",
//     avgPoint: 10,
//     avgTPoin: 2,
//     status: "pass",
//   },
// ];

// let sortByAvgPoint = [...class1, ...class2].sort(
//   (a, b) => b.avgPoint - a.avgPoint
// );

// let allStudents = class1.concat(class2);
// let maxAvgPoint = allStudents.reduce((max,student)=>student.avgPoint > max.avgPoint? student: max);
// console.log( maxAvgPoint);

// // const highestAvgPointStudent = allStudents.find((item) => {
// //   return (
// //     item.avgPoint === Math.max(...allStudents.map((item) => item.avgPoint))
// //   );
// // });

// export default function App() {
//   return (

//     <View style={styles.container}>
//       <View style={styles.texts}>
//         <Text style={styles.text}> hàm filter</Text>
//         <Text children={evenNumbers + ""} style={styles.text}></Text>
//       </View>

//       <View style={styles.texts}>
//         <Text style={styles.text}> hàm reduce</Text>
//         <Text children={sum + ""} style={styles.text}></Text>
//       </View>

//       {/* <View style={styles.texts}>
//         <Text style={styles.text}> số điểm lớn nhất theo Avg point </Text>
//         <View style={{ margin: 10 }}>
//           <Text>{highestAvgPointStudent.code}</Text>
//           <Text>{highestAvgPointStudent.name}</Text>
//           <Text>{highestAvgPointStudent.avgPoint}</Text>
//           <Text>{highestAvgPointStudent.status}</Text>
//         </View>
//       </View> */}

//       <View style={styles.texts}>
//         <Text style={styles.text}> số điểm lớn nhất theo Avg Training point</Text>

//       </View>

//       <Text style={styles.texts}> sắp xếp theo avg Point </Text>
//       <ScrollView horizontal style={styles.text1}>
//         {sortByAvgPoint.map((student, index) => (
//           <View
//             key={index}
//             style={{
//               backgroundColor: "#fff",
//               borderRadius: 25,
//               margin: 10,
//               padding: 10,
//               elevation: 10,
//               height: 150,
//             }}
//           >
//             <Text>Mã số sinh viên: {student.code}</Text>
//             <Text>Tên: {student.name}</Text>
//             <Text>Điểm Trung bình: {student.avgPoint}</Text>
//             <Text>Điểm ... : {student.avgTPoin}</Text>
//             <Text>Trạng thái: {student.status}</Text>
//           </View>
//         ))}
//       </ScrollView>

//       <Text style={styles.texts}> sắp xếp theo avg training Point </Text>
//       <ScrollView horizontal style={styles.text1}>
//         {sortByAvgPoint.map((student, index) => (
//           <View
//             key={index}
//             style={{
//               backgroundColor: "#fff",
//               borderRadius: 25,
//               margin: 10,
//               padding: 10,
//               elevation: 10,
//               height: 150,
//             }}
//           >
//             <Text>Mã số sinh viên: {student.code}</Text>
//             <Text>Tên: {student.name}</Text>
//             <Text>Điểm Trung bình: {student.avgPoint}</Text>
//             <Text>Điểm ... : {student.avgTPoin}</Text>
//             <Text>Trạng thái: {student.status}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   texts: {
//     fontSize: 20,
//     color: "red",
//     marginTop: 30,
//   },
//   text: {
//     fontSize: 20,
//     color: "blue",
//     alignSelf: "center",
//   },
//   text1: {
//     background: "#A22929",
//     fontSize: 20,
//     color: "blue",
//     alignContent: "center",
//     height: 300,
//   },
// });
