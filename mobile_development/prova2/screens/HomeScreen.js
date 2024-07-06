import React, { useContext, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import DButton from "../components/DButton";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <DButton
        title="Contatos"
        onPress={() => navigation.navigate("Lista de Contatos")}
      />
      <DButton
        title="Tarefas"
        onPress={() => navigation.navigate("Lista de Tarefas")}
      />

      <DButton
        title="Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    color: "white",
  },
});
