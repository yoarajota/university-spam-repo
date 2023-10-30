import verifyJWT from "./helpers";

export default function router(app) {
    app.get('/publica', (req, res) => {
        res.json({ message: 'Acesso ao recurso público' });
    })
    // Rota privada
    app.get('/privada', verifyJWT, (req, res, next) => {
        res.json({ message: 'Acesso ao recurso protegido permitido' });
    })


    app.post("/login", (req, res) => {
        const { username, password } = req.body;
        // Verifica se o usuário e senha existem em nossa “base de dados”
        if (username === "usuario" && password === "senha") {
            const id = 1; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300, // expira em 5min
            });
            res.json({ token });
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
        }
    });

}
