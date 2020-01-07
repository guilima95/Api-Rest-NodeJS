"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Anotacao = require('../models/Anotacao'); var _Anotacao2 = _interopRequireDefault(_Anotacao);

class AnotacaoController {

    async store(req, res) {
        const { usuario_id } = req.headers;
        const { livro_id } = req.params;
        const { data } = req.body;

        const anotacao = await _Anotacao2.default.create({
            usuario: usuario_id,
            livro: livro_id,
            data,
        });

        //populando objetos ao invés do id (return)
        await anotacao.populate('livro').populate('usuario').execPopulate();

        return res.json(anotacao);
    }
}

exports. default = new AnotacaoController();
