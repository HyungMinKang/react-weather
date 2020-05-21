import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";

export default function App() {
  return (
    <View style={styles.container}>
      <Loading />
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

// react-native flexbox는 flex-direction default가 column이다
const styles = StyleSheet.create({
  // 형제가 없는경우 flex:1은 전체를 다 쓰겠다
  container: {
    flex: 1,
  },
  text: {
    color: "black",
  },
  // 형제가 있는 경우 상대적인 비율
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue",
  },
});
