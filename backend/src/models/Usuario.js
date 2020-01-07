
import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const UsuarioSchema = new Schema({

    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

UsuarioSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});


export default model("Usuario", UsuarioSchema);