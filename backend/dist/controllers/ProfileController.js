"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Livro = require('../models/Livro'); var _Livro2 = _interopRequireDefault(_Livro);

class ProfileController {

    async show(req, res) {
        const { usuario_id } = req.headers;
        const livros = await _Livro2.default.find({ usuario: usuario_id })

        return res.json(livros);
    }
}

exports. default = new ProfileController();