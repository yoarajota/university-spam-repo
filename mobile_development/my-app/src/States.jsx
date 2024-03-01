import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
export default function States() {
    const [calculation, setCalculation] = useState(0);
    const [color, setColor] = useState("azul");
    const [count, setCount] = useState(0);
    const [carro, setCarro] = useState({
        marca: "Ford",
        modelo: "Mustang",
        ano: "1964",
        cor: "vermelha",
    });

    const atualizaCor = () => {
        setCarro((previousState) => {
            return { ...previousState, cor: "azul" };
        });
    };

    useEffect(() => {
        const add = () => {
            setTimeout(() => {
                setCount((count) => count + 1);

                add()
            }, 1000);
        }

        add()
    }, []);


    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <View style={styles.container}>
            <Text>Minha cor favorita é {color}!</Text>
            <Pressable
                style={styles.button}
                onPress={() => setColor("vermelho")}>
                <Text
                    style={styles.text_white}
                > Mudar a cor - Num pressable!</Text>
            </Pressable>

            <Text>O meu carro {carro.marca}</Text>
            <Text>
                Este é um {carro.modelo} de cor {carro.cor} de {carro.ano}!
            </Text>
            <Pressable
                style={styles.button}
                onPress={atualizaCor}>
                <Text
                    style={styles.text_white}
                > Mudar a cor - Num pressable! </Text>
            </Pressable>
            <Text>Cálculo: {calculation}</Text>


            <Text>Eu renderizei {count} vezes!</Text>
            <StatusBar style="auto" />

        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "blue",
        padding: "5px",
    },
    text_white: {
        color: "#fff"
    }
});