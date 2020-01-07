
import { Router } from "express";
import Auth from './Security/Auth';


import AuthController from './controllers/AuthController';
import LivroController from './controllers/LivroController';
import ProfileController from './controllers/ProfileController';
import AnotacaoController from "./controllers/AnotacaoController";


import uploadConfig from './config/upload';
import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/profile', Auth.verificaToken, ProfileController.show);
routes.get('/livros', Auth.verificaToken, LivroController.index);
routes.post('/livros', Auth.verificaToken, upload.single('thumbnail'), LivroController.store);
routes.delete('/livros', Auth.verificaToken, LivroController.destroy);
routes.get('/profile', Auth.verificaToken, ProfileController.show);
routes.get('/anotacoes', Auth.verificaToken, AnotacaoController.index);
routes.post('/anotacoes/:anotacao_id/anotacao', Auth.verificaToken, AnotacaoController.store);


//Auth
routes.post('/register', AuthController.store);
routes.post('/auth', AuthController.auth);



module.exports = routes;