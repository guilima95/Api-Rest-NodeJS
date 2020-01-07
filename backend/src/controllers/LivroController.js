import Usuario from '../models/Usuario';
import Livro from '../models/Livro';


class LivroController {

    // get (buscar)
    async index(req, res) {
        const { autor } = req.query;
        const livros = await Livro.find({
            autores: autor
        })

        return res.json(livros);
    }

    // get id (buscar pelo id)
    async show(req, res) {
        const { user_id } = req.headers;
        const livros = await Livro.find({
            user: user_id
        })

        return res.json(livros);
    }


    // delete (remover)
    async destroy(req, res) {
        const livro = show();
        Livro.delete(livro);
        return res.status(200).json({
            message: 'Livro deletado com sucesso!'
        });
    }

    // create (adicionar)
    async store(req, res) {
        const { filename } = req.file;
        const { titulo, autores, paginas } = req.body;
        const { usuario_id } = req.headers;

        const usuario = await Usuario.findById(usuario_id);
        if (!usuario) {
            return res.status(400).json({
                error: 'Usuario não existe!'
            });
        }
        const livro = await Livro.create({
            usuario: usuario_id,
            thumbnail: filename,
            titulo,
            autores: autores.split(',').map(autor => autor.trim()),
            paginas
        })

        return res.json(livro);
    }
    //update (atualiazar)
    async update(req, res) {
        const { filename } = req.file;
        const { titulo, autores, paginas } = req.body;
        const { usuario_id } = req.headers;

        const usuario = await Usuario.findById(usuario_id);
        if (!usuario) {
            return res.status(400).json({
                error: 'Usuario não existe!'
            });
        }
        const livro = await Livro.update({
            usuario: usuario_id,
            thumbnail: filename,
            titulo,
            autores: autores.split(',').map(autor => autor.trim()),
            paginas
        })

        return res.json(livro);
    }
}

export default new LivroController();