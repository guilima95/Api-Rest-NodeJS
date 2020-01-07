import jwt from 'jsonwebtoken';


class Auth {

    constructor() { }

    async verificaToken(req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['X-Api-Token'];
        if (!token)
            return res.status(401).json({
                message: 'Token não autenticado.'
            });
        jwt.verify(token, configJWT.secret, (err, decoded) => {
            if (err)
                return res.status(500).json({
                    message: 'Falha ao autenticar o token, entre em contato com administrador do servidor.'
                });
            req.userId = decoded.id;
            next();
        });
    };

}

export default new Auth();