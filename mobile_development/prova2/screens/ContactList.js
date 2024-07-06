import React, { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  deleteContact,
  deleteTaskContactsByContactId,
  fetchContactsForList,
} from "../database";
import DButton from "../components/DButton";

const ContactList = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchContactsForList(setContacts);
    }, [])
  );

  const handleDelete = (id) => {
    deleteContact(id);
    deleteTaskContactsByContactId(id);
    fetchContactsForList(setContacts);
  };

  return (
    <View>
      <DButton
        title="Adicionar Contato"
        onPress={() => navigation.navigate("Adicionar Contato")}
      />
      <FlatList
        style={styles.list}
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => handleDelete(item.id)}
            >
              <Icon name="trash" size={30} color="#900" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
  },
  titleContainer: {
    width: "90%",
  },
  buttonContainer: {

  },
});

export default ContactList;
