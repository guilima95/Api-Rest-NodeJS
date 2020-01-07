"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// const Usuario = require('../models/Usuario');
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

// index, show, store, update, destroy
// index -> listar todas as sessões
// show -> unica sessão
// store -> criar uma sessão
// update -> atualizar uma sessão
// destroy -> deletar uma sessão 

class UsuarioController {

    async store(req, res) {
        const { email } = req.body;
        let usuario = await _Usuario2.default.findOne({
            email
        });

        if (!usuario) {
            usuario = await _Usuario2.default.create({
                email
            });
        }

        return res.json(usuario);
    }
}

exports. default = new UsuarioController();

