import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import ViewWrap from "./components/ViewWrap";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    if (todo === "") {
      return;
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo) => {
    if (editedTodo?.id === todo.id) {
      setEditedTodo(null);
      setTodo("");
      return;
    }

    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  const handleSetDone = (id) => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }

      return item;
    });

    setTodoList(updatedTodos);
  };

  const renderTodos = ({ item, index }) => {
    const color = editedTodo?.id === item.id ? "#fccf03" : "#000";

    return (
      <View
        style={[
          styles.item,
          { borderColor: color, opacity: item?.done ? 0.5 : 1 },
        ]}
      >
        <Pressable
          onPress={() => handleSetDone(item.id)}
          style={{
            width: 20,
            height: 20,
            marginRight: 8,
            borderRadius: 6,
            backgroundColor: item.done ? color : "",
            borderColor: color,
            borderWidth: 2,
          }}
        />
        <Text style={{ color, fontWeight: "800", flex: 1, maxWidth: "65%" }}>
          {item.title}
        </Text>
        <View
          style={{
            gap: 4,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.listButtons,
              { borderColor: color, opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={() => handleEditTodo(item)}
          >
            <Text style={[{ color }, styles.listButtonsText]}>Editar</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.listButtons,
              { borderColor: color, opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={() => handleDeleteTodo(item.id)}
          >
            <Text style={[{ color }, styles.listButtonsText]}>Deletar</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ViewWrap>
      <TextInput
        style={styles.input}
        placeholder="Adicionar tarefa"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <Pressable
          style={({ pressed }) => [
            styles.btnStyle,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.btnStyle,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => handleAddTodo()}
        >
          <Text style={styles.textButton}>Adicionar</Text>
        </Pressable>
      )}

      <FlatList data={todoList} renderItem={renderTodos} />
    </ViewWrap>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnStyle: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 4,
    marginVertical: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  item: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 6,
    justifyContent: "space-between",
  },
  listButtons: {
    marginHorizontal: 4,
    backgroundColor: "",
    borderWidth: 2,
    borderRadius: 6,
    width: 60,
    paddingHorizontal: 4,
  },
  listButtonsText: {
    fontWeight: "bold",
  },
});
