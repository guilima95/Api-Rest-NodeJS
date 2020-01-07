// const Usuario = require('../models/Usuario');
import Usuario from '../models/Usuario'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/configJWT';


class UsuarioController {

    //create
    async store(req, res) {
        const { nome, email, senha } = req.body;
        let usuario = await Usuario.findOne({
            email,
        }).select('+senha');

        if (!usuario) {
            usuario = await Usuario.create(req.body);
        }
        return res.json(usuario);
    }

    async auth(req, res) {
        const { email, senha } = req.body;
        let usuario = await Usuario.findOne({
            email,

        }).select('+senha');

        if (!usuario)
            return res.status(400).send({ error: 'Usuário não existe. ' });

        if (!await bcrypt.compare(senha, usuario.senha))
            return res.status(400).send({ error: 'Usuário ou senha inválido' });

        let token = jwt.sign({ nome: usuario.nome },
            config.secret,
            {
                expiresIn: config.expiresIn // expires in 12 hours
            }
        );
        res.json({
            success: true,
            message: 'Authentication successful!',
            token_acess: token
        });

    }
}

export default new UsuarioController();

