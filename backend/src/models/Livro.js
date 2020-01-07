import { Schema, model } from "mongoose";

const LivroSchema = new Schema({

    thumbnail: String,
    titulo: String,
    autores: [String],
    paginas: Number,
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});


LivroSchema.virtual('thumbnail_url').get(function () {
    return `http://127.0.0.1:3001/files/${this.thumbnail}`
})
export default model("Livro", LivroSchema);