"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _mongoose = require('mongoose');

const AnotacaoSchema = new (0, _mongoose.Schema)({
    data: String,
    descricao: String,
    frase: String,
    autorFrase: String,
    pagina: Number,
    Usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro'
    }
});

exports. default = _mongoose.model.call(void 0, "Anotacao", AnotacaoSchema);