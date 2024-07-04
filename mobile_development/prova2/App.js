import React, { useState, useReducer, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import AddContactScreen from "./screens/AddContactScreen";
import ContactList from "./screens/ContactList";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Splash from "./components/Splash";
import AuthContext from "./components/Auth";

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(true);
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

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("@storage_Key");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        let myToken = "dummy-auth-token";
        await AsyncStorage.setItem("@storage_Key", myToken);
        dispatch({ type: "SIGN_IN", token: myToken });
      },
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        `AsyncStorage`;
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista de Tarefas">
          <Stack.Screen
            name="Entrar"
            component={SignIn}
            options={{ title: "Entrar" }}
            initialParams={{ setUserToken }}
          />
          {userToken && (
            <>
              <Stack.Screen name="Lista de Tarefas" component={HomeScreen} />
              <Stack.Screen name="Adicionar Tarefa" component={AddTaskScreen} />
              <Stack.Screen
                name="Detalhes da Tarefa"
                component={AddTaskScreen}
              />
              <Stack.Screen
                name="Adicionar Contato"
                component={AddContactScreen}
              />
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
