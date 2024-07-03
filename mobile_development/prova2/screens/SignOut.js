import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ActivityIndicator } from "react-native";

function SignOut() {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
export default SignOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
