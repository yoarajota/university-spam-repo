import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, Pressable } from "react-native";
import AuthContext from "../components/Auth";
import DButton from "../components/DButton";

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>E-mail</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <DButton
          title="Entrar"
          onPress={async () => {
            signIn({ email, password });
            setTimeout(async () => {
              navigation.navigate("Home");
            });
          }}
        />
      </View>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
});
