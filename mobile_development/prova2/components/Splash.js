import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ActivityIndicator } from "react-native";
function Splash() {
  return (
    <View style={styles.container}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
