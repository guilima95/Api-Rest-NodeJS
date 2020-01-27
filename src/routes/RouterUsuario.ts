import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
import AuthController from '../controllers/AuthController';
import auth from '../security/auth';


export class RouterUsuario {
    public router: Router;

    /**
     * Configuração de rotas relacionadas ao Usuário da api
     */
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        //usuario
        this.router.patch('/update', auth.verifyJWT, UsuarioController.update);
        this.router.post('/signup', UsuarioController.store);
        this.router.delete('/delete/:id', auth.verifyJWT, UsuarioController.destroy);
        this.router.get('/users', auth.verifyJWT, UsuarioController.index);
        this.router.get('/users/:id', auth.verifyJWT, UsuarioController.show);

        //signin
        this.router.post('/signin', AuthController.store);
    }
}