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
        var decode = jwt.decode(token, { json: true });
        jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
            if (decode.iat >= decode.exp) {
                return res.status(401).send({ auth: false, message: 'Sessão expirou.', status: res.statusCode });
            }
            else if (err) {
                return res.status(500).send({ auth: false, message: 'Sessão expirou. Entre em contato com administrador.', status: res.statusCode });
            }
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();

        });
    }
}

export default new Auth();