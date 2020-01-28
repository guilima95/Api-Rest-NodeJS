import { Descrypt } from './../config/Descrypt';
import repository from '../repository/usuario';
import { Request, Response, NextFunction } from "express";
import auth from '../security/auth';


class AuthController {

    constructor() { }

    async store(req: Request, res: Response): Promise<void> {
        await repository.getUser(req.body.email).then(usuario => {
            //Validacao da senha criptografada
            if (!Descrypt(req.body.senha, usuario.senha.toString()))
                res.json({ message: 'Usuário e/ou senha inválidos', status: 401 });

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