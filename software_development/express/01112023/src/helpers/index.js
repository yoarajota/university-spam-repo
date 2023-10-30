export default function verifyJWT(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Token não fornecido" });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err)
            return res.status(500).json({ auth: false, message: "Token inválido" });
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}