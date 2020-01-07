

class ProfileController {

    // get id
    async show(req, res) {
        const { usuario_id } = req.headers;
        const livros = await Livro.find({ usuario: usuario_id })

        return res.json(livros);
    }
}

export default new ProfileController();