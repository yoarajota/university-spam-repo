import React, { useContext, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Contatos"
        onPress={() => navigation.navigate("Lista de Contatos")}
      />
      <Button
        style={styles.button}
        title="Tarefas"
        onPress={() => navigation.navigate("Lista de Tarefas")}
      />
      
      <Button
        style={styles.button}
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
    margin: 10,
    backgroundColor: "#f0f0f0",
  }
});
