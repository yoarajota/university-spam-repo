import { Button, Pressable, StyleSheet, Text } from "react-native";
import ViewWrap from "./components/ViewWrap";
import React, { BackHandler } from "react-native";

export default function Leave() {
  return (
    <ViewWrap>
      <Text>Tem certeza que deseja sair?</Text>
      <Pressable style={styles.btnStyle} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.textStyle}>Confirmar</Text>
      </Pressable>
    </ViewWrap>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginVertical: 34,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
});
