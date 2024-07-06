import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
import AuthContext from "../components/Auth";
import { useContext } from "react";
import DButton from "../components/DButton";

function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <DButton
        title="Sign Out"
        onPress={async () => {
          await signOut();
          navigation.navigate("Entrar");
        }}
      />
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
