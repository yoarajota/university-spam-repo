import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { insertContact } from '../database';
import DButton from '../components/DButton';

export default function AddContactScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addContact = async () => {
        await insertContact(name, email, phone);
        navigation.navigate("Lista de Contatos");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="numeric"
            />

            <DButton
                title="Adicionar Contato"
                onPress={addContact}
            />
        </View>
    );
};

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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
});