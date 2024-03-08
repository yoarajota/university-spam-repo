import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from './style';

function Home() {
    const [state, setTitle] = useState({ title: '' });
    const [s, setState] = useState({text: ''});

    return (
        <View style={styles.container}>
            <Text style={styles.titleHeading}>Título da anotação</Text>
            <TextInput style={styles.titleTextInput}
                onChangeText={(title) => setTitle({ title })}
                value={state.title} />
            <Text style={styles.textAreaTitle}>Digite sua anotação
                aqui:</Text>
            <TextInput
                style={styles.textArea}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setState({ text })}
                value={s.text}
            />


            <View style={styles.firstBtn}>First button</View>
            <View style={styles.secondBtn}>Second button</View>
        </View>
    );
}
export default Home;