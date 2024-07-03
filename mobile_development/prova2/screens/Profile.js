import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ActivityIndicator } from "react-native";
function Profile() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
