import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Pressable } from "react-native";
function DButton({ navigation, title, onPress = () => {} }) {
  return (
    <Pressable
      style={styles.button}
      title="Perfil"
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
export default DButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 4,
    maxWidth: 400,
    marginHorizontal: "auto",
    cursor: "pointer",
  },
  text: {
    color: "white",
  },
});
