import { StyleSheet, View } from "react-native";
import React from "react";

export default function ViewWrap({ children, style }) {
  return (
    <View style={{ marginHorizontal: 16, marginTop: 40, ...style }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
