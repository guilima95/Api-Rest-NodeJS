import jwt = require("jsonwebtoken");
import { JWT_SECRET, signOptions } from './../config/secrets';



class Auth {

    constructor() { }


    generateToken() {
        return jwt.sign({
            iss: signOptions.issuer,
            aud: signOptions.audience,
            exp: Math.floor(Date.now() / 1000) + (30 * 60),
            scope: 'full_access',
            sub: "lalaland|gonto",
            alg: 'HS256'
        }, JWT_SECRET, {
        });
    }

    verifyJWT(req, res, next) {
        var token = req.headers['x-access-token'] || req.headers['X-Api-Token'];

        if (!token) return res.status(401).send({ auth: false, message: 'Não Autorizado.', status: res.statusCode });

        jwt.verify(token, JWT_SECRET, function (err, decoded) {
            if (decoded.exp == Date.now())
                return res.status(401).send({ auth: false, message: 'Sessão expirou.', status: res.statusCode });
            if (err) return res.status(500).send({ auth: false, message: 'Erro ao autenticar, entre em contato com administrador.' });
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    }
}

export default new Auth();