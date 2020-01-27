import jwt = require("jsonwebtoken");
import repository from '../repository/usuario';
import { JWT_SECRET, signOptions } from './../config/secrets';
import { Request, Response, NextFunction } from "express";
import auth from '../security/auth';

class AuthController {

    constructor() { }

    async store(req: Request, res: Response): Promise<void> {

        await repository.getUser(req.body).then(usuario => {

            if (usuario.senha !== req.body.senha) {
                res.json({ message: 'Usuário e/ou senha inválidos', status: 401 });
            }
            else {
                let token = auth.generateToken();
                res.json({ access_token: token, id: usuario.id, email: usuario.email, ultimo_login: new Date() })
            }


        }).catch(err => {
            res.json({ message: 'Usuário e/ou senha inválidos', status: 400 });
        });
    }
}

export default new AuthController();