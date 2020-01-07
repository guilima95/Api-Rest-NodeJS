"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Livro = require('../models/Livro'); var _Livro2 = _interopRequireDefault(_Livro);

// index, show, store, update, destroy
// index -> listar todas as sessões
// show -> unica sessão
// store -> criar uma sessão
// update -> atualizar uma sessão
// destroy -> deletar uma sessão 

class LivroController {

    async index(req, res) {
        const { autor } = req.query;
        const livros = await _Livro2.default.find({
            autores: autor
        })

        return res.json(livros);
    }


    async show(req, res) {
        const { user_id } = req.headers;
        const livros = await _Livro2.default.find({
            user: user_id
        })

        return res.json(livros);
    }


    async destroy(req, res) {
        const livro = show();
        _Livro2.default.delete(livro);
        return res.status(200).json({
            message: 'Livro deletado com sucesso!'
        });
    }


    async store(req, res) {
        const { filename } = req.file;
        const { titulo, autores, paginas } = req.body;
        const { usuario_id } = req.headers;

        const usuario = await _Usuario2.default.findById(usuario_id);
        if (!usuario) {
            return res.status(400).json({
                error: 'Usuario não existe!'
            });
        }
        const livro = await _Livro2.default.create({
            usuario: usuario_id,
            thumbnail: filename,
            titulo,
            autores: autores.split(',').map(autor => autor.trim()),
            paginas
        })

        return res.json(livro);
    }
}

exports. default = new LivroController();