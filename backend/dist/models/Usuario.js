"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _mongoose = require('mongoose');

const UsuarioSchema = new (0, _mongoose.Schema)({
    email: String,
});
exports. default = _mongoose.model.call(void 0, "Usuario", UsuarioSchema);