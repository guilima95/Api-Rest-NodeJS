import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
import AuthController from '../controllers/AuthController';


export class RouterUsuario {
    public router: Router;

    /**
     *
     */
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        //usuario
        this.router.patch('/update', UsuarioController.update);
        this.router.post('/signup', UsuarioController.store);
        this.router.delete('/delete/:id', UsuarioController.destroy);
        this.router.get('/users', UsuarioController.index);
        this.router.get('/users/:id', UsuarioController.show);

        //signin
        this.router.post('/signin', AuthController.store);
    }
}