import Anotacao from '../models/Anotacao'

class AnotacaoController {

    //create
    async store(req, res) {
        const { usuario_id } = req.headers;
        const { data } = req.body;

        const novaAnotacao = await Anotacao.create({
            usuario: usuario_id,
            data,
        });

        //populando objetos ao invés do id (return)
        await novaAnotacao.populate('usuario').populate('livro').execPopulate();

        return res.json(novaAnotacao);
    }


    //get id(buscar pelo id)
    async show(req, res) {
        const { user_id } = req.headers;
        const anotacoes = await Anotacao.find({
            user: user_id
        })

        return res.json(anotacoes);
    }

    //get (buscar)
    async index(req, res) {
        const anotacoes = await Anotacao.find({
            nome: usuario
        })
        return res.json(anotacoes);
    }




}

export default new AnotacaoController();
