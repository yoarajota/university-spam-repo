import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import {
  deleteTaskContactsByTaskId,
  fetchContactsForList,
  getContactIdsByTaskId,
  getTaskById,
  insertTask,
  insertTaskContact,
  updateTask,
} from "../database";
import DropDownPicker from "react-native-dropdown-picker";
import { useFocusEffect } from "@react-navigation/native";
import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from "expo-local-authentication";

export default function AddTaskScreen({ navigation, route }) {
  const { taskId = null } = route?.params ?? {};

  const [isEdit, setIsEdit] = useState(!taskId);

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [openDropdownContacts, setOpenDropdownContacts] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      fetchContactsForList((result) => {
        setContacts(
          result.map((contact) => ({
            label: contact.name,
            value: contact.id,
          }))
        );
      });
    }, [])
  );

  useEffect(() => {
    if (taskId > 0) {
      getTaskById(taskId, (task) => {
        setname(task.name);
        setdescription(task.description);
        setDate(new Date(task.date));
        setTime(new Date(task.time));
      });

      getContactIdsByTaskId(taskId, setSelectedContacts);
    }
  }, [taskId]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDate(false);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
    setShowTimePicker(false);
  };

  const addTask = async () => {
    const dateSting = date.toISOString();
    const timeString = time.toISOString();

    if (taskId && taskId > 0) {
      updateTask(taskId, name, description, dateSting, timeString);
      deleteTaskContactsByTaskId(taskId);
      selectedContacts.forEach((contactId) =>
        insertTaskContact(taskId, contactId)
      );
      setIsEdit(false);
      return;
    }

    insertTask(name, description, dateSting, timeString, (taskIdReturn) => {
      selectedContacts.forEach((contactId) =>
        insertTaskContact(taskIdReturn, contactId)
      );
    });

    navigation.goBack();
  };

  const getSelectedContactsLabels = () => {
    return selectedContacts
      .map((idContato) => {
        const contact = contacts.find((contato) => contato.value == idContato);
        if (contact) return contact.label;
      })
      .filter((value) => value)
      .join(", ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <TextInput
        style={styles.input}
        onChangeText={setname}
        value={name}
        editable={isEdit}
      />

      <Text style={styles.label}>Descrição da Tarefa</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={11}
        onChangeText={setdescription}
        value={description}
        editable={isEdit}
      />

      <Text style={styles.label}>Contatos</Text>
      <DropDownPicker
        style={styles.input}
        items={contacts}
        multiple={true}
        multipleText={getSelectedContactsLabels()}
        value={selectedContacts}
        setValue={setSelectedContacts}
        open={openDropdownContacts && isEdit}
        setOpen={setOpenDropdownContacts}
        placeholder="Selecione os contatos"
        disabled={!isEdit}
      />

      <Text style={styles.label}>Data da Tarefa</Text>
      <Text style={styles.input} onPress={() => isEdit && setShowDate(true)}>
        {date.toLocaleDateString([], {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </Text>
      {showDate && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={"default"}
          onChange={onChange}
        />
      )}

      <Text style={styles.label}>Horário da Tarefa</Text>
      <Text
        style={styles.input}
        onPress={() => isEdit && setShowTimePicker(true)}
      >
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode={"time"}
          display={"default"}
          onChange={onTimeChange}
        />
      )}

      <Button
        title={
          isEdit
            ? taskId
              ? "Salvar Tarefa"
              : "Adicionar Tarefa"
            : "Editar Tarefa"
        }
        onPress={isEdit ? addTask : () => setIsEdit(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
});
