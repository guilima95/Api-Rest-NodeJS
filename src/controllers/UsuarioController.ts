import { Hash } from './../config/Hash';
import repository from '../repository/usuario';
import { Request, Response } from 'express';


class UsuarioController {

    constructor() { }

    //obter usuario por id
    async show(req: Request, res: Response): Promise<void> {

        const usuario = await repository.getById({
            userId: req.params.id
        });
        res.json({ usuario: usuario, status: res.statusCode });
    }
    //deletar usuário
    async destroy(req: Request, res: Response): Promise<void> {

        const usuario = await repository.delete({ userId: req.query.id });
        res.json({ usuario: usuario, status: res.statusCode });
    }
    //novo usuario
    async store(req: Request, res: Response): Promise<void> {
        const { nome, email, telefones } = req.body;
        req.body.senha = Hash(req.body.senha);
        await repository.create(req.body).then(usuario => {
            res.status(201).json({ usuario: usuario, status: res.statusCode });
        }).catch(err => {
            res.status(409).json({ concorrent: 'Usuário já existe!' });
        })
    }
    //obter todos usuários
    async index(req: Request, res: Response): Promise<void> {
        const usuario = await repository.getAll();
        res.json({ usuario: usuario, status: res.statusCode });
    }
    //atualiza o usuário
    async update(req: Request, res: Response): Promise<void> {

        const id = req.query;
        const usuario = req.body;

        await repository.update(id, usuario);
        res.json({ usuario: usuario, status: res.statusCode });
    }
}


export default new UsuarioController();

