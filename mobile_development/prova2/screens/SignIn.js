import { StyleSheet } from 'react-native';
import { View, Text,TextInput, Button } from 'react-native';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  return (
    <View>
      <Text>E-mail</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={() => signIn({ email, password })} />
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
