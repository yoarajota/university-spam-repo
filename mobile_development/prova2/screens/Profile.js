import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";
import AuthContext from "../components/Auth";
import { useContext } from "react";

function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Button
        style={styles.signOut}
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
