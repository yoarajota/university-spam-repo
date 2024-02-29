import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
} from "@mui/material";

class Contact extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    padding: 20
                }}
            >
                <form style={{ width: "50%" }}>
                    <h1>Formulário de Contato</h1>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="name">Nome</InputLabel>
                        <Input id="name" type="text" />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                        <Input id="email" type="email" />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">Mensagem</InputLabel>
                        <Input id="email" multiline rows={10} />
                    </FormControl>
                    <Button variant="contained" color="primary" size="medium">
                        Enviar
                    </Button>
                </form>
            </div>
        );
    }
}
export default Contact;