import { StyleSheet, Text } from "react-native";
import React from "react";
import Todo from "./src/Todo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import Leave from "./src/Leave";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0)"
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{
            title: "Todo",
            headerStyle: {
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0)"
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Leave"
          component={Leave}
          options={{
            title: "Sair",
            headerStyle: {
              height: 40,
              backgroundColor: "rgba(0, 0, 0, 0)"
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
