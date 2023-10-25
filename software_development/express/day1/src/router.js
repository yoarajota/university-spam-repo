export default function router(app) {
    let accounts = [
        {
            id: 1,
            username: "paulhal",
            role: "admin",
        },
        {
            id: 2,
            username: "johndoe",
            role: "guest",
        },
        {
            id: 3,
            username: "sarahjane",
            role: "guest",
        },
    ];

    app.get('/', function (_, res) {
        res.send('! 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16');
    });

    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user');
    });

    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user');
    });

    app.get('/', function (req, res) {
        res.send('root');
    });

    app.get('/about', function (req, res) {
        res.send('about');
    });

    app.get("/", (req, res) => {
        res.send(`
        <div>
        <h1>Lista para estudos:</h1>
            <ul>
                <li style='text-decoration:line-through'>Aprender sobre o roteamento
                com o Express</li>
                <li style='text-decoration:line-through'>Criar minhas próprias
                rotas</li>
            </ul>
        </div>
        `);
    });

    app.get("/", (req, res) => {
        res.send({ user: "Mauricio" });
    });

    app.get("/accounts", (req, res) => {
        res.json(accounts);
    });

    app.get("/accounts/:id", (req, res) => {
        const accountId = Number(req.params.id);
        // Verifica se este id existe no array de accounts
        const getAccount = accounts.find((account) => account.id === accountId);
        if (!getAccount) {
            res.status(500).send("Esta conta não existe.");
        } else {
            res.json(getAccount);
        }
    });

    app.post("/accounts", (req, res) => {
        const incomingAccount = req.body;
        accounts.push(incomingAccount);
        res.json(accounts);
    });

    app.put("/accounts/:id", (req, res) => {
        // Busca o parametro id da requisição
        const accountId = Number(req.params.id);
        const body = req.body;
        // Verifica se este id existe no array de accounts
        const account = accounts.find((account) => account.id === accountId);
        const index = accounts.indexOf(account);
        if (!account) {
            res.status(500).send("Conta não foi encontrada.");
        } else {
            const updatedAccount = { ...account, ...body };
            accounts[index] = updatedAccount;
            res.send(updatedAccount);
        }
    });

    app.delete("/accounts/:id", (request, response) => {
        // Busca o parametro id da requisição
        const accountId = Number(request.params.id);
        const newAccounts = accounts.filter((account) => account.id != accountId);
        if (!newAccounts) {
            response.status(500).send("Conta não encontrada.");
        } else {
            accounts = newAccounts;
            response.send(accounts);
        }
    });

}
