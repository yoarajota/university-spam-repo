import React, { useState, useReducer, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import AddContactScreen from "./screens/AddContactScreen";
import ContactList from "./screens/ContactList";
import TaskList from "./screens/TaskList";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Splash from "./components/Splash";
import AuthContext from "./components/Auth";

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  function setUserToken(token) {
    dispatch({ type: "SIGN_IN", token });
  }

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem("@storage_Key");
      } catch (e) {
        token = false;
      }
      dispatch({ type: "RESTORE_TOKEN", token });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        let myToken = "false-jwt";
        await AsyncStorage.setItem("@storage_Key", myToken);
        dispatch({ type: "SIGN_IN", token: myToken });
      },
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        `AsyncStorage`;
        dispatch({ type: "SIGN_IN", token: "false-jwt" });
      },
    }),
    []
  );

  if (state.isLoading) {
    return <Splash />;
  }

  console.log(state.userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Entrar"
            component={SignIn}
            options={{ title: "Entrar" }}
            initialParams={{ setUserToken }}
          />
          {state.userToken && (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Adicionar Tarefa" component={AddTaskScreen} />
              <Stack.Screen
                name="Detalhes da Tarefa"
                component={AddTaskScreen}
              />
              <Stack.Screen
                name="Adicionar Contato"
                component={AddContactScreen}
              />
              <Stack.Screen name="Lista de Tarefas" component={TaskList} />
              <Stack.Screen name="Lista de Contatos" component={ContactList} />
              <Stack.Screen name="Perfil" component={Profile} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
