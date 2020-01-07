"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const LivroSchema = new (0, _mongoose.Schema)({
    thumbnail: String,
    titulo: String,
    autores: [String],
    paginas: Number,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});


ItemSchema.virtual('thumbnail_url').get(function () {
    return `http://127.0.0.1:3001/files/${this.thumbnail}`
})
exports. default = _mongoose.model.call(void 0, "Livro", LivroSchema);