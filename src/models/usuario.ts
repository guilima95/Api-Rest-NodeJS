import { Telefone, ITelefone } from './../telefone/telefone';
import { Schema, Document, Model, model, Error } from "mongoose";
import { telefone } from "../telefone/telefone";

export interface IUsuario extends Document {
    nome: String;
    senha: String;
    email: String;
    telefones: Array<ITelefone>;
}


export const usuario = new Schema({

    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    telefones: [{ type: Array, ref: 'Telefone' }]
}, {
    toJSON: {
        virtuals: true,
    },



});




export const Usuario: Model<IUsuario> = model<IUsuario>("Usuario", usuario);
Usuario.find({}).populate('telefones').exec(() => {
    console.log('Ok');
})



