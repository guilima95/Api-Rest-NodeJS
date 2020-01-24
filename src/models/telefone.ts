import { Schema, Document, Model, model, Error } from "mongoose";

export interface ITelefone extends Document {
    ddd: Number;
    numero: Number;
    usuarios: any;

}

export const telefone = new Schema({

    numero: {
        type: Number,
        required: true
    },

    ddd: {
        type: Number,
        required: true

    }
}, {
    toJSON: {
        virtuals: true,
    },

}).pre('save', function (next) {


});

export const Telefone: Model<ITelefone> = model<ITelefone>("Telefone", telefone);