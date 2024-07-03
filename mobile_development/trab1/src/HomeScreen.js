import { Pressable, StyleSheet, Text } from "react-native";
import ViewWrap from "./components/ViewWrap";

export default function HomeScreen({ navigation }) {
  return (
    <ViewWrap style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.btnStyle,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={() => navigation.navigate("Todo")}
      >
        <Text style={styles.textStyle}>Ir para a lista de tarefas</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.btnStyle,
          { opacity: pressed ? 0.5 : 1 },
        ]}
        onPress={() => navigation.navigate("Leave")}
      >
        <Text style={styles.textStyle}>Sair</Text>
      </Pressable>
    </ViewWrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  btnStyle: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
});
