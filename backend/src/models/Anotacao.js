
import { Schema, model } from "mongoose";

const LiberacaoSchema = new Schema({

    data: Date,
    descricao: String,
    autorFrase: String,

    Usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }, 
    Livro: {
        type: Schema.Types.ObjectId, 
        ref: 'Livro'
    }

});

export default model("Liberacao", LiberacaoSchema);