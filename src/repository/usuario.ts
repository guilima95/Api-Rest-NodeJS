import { Usuario } from '../models/usuario';



class RepositoryUsuario {

    constructor() { }

    getAll() {
        return Usuario.find();
    }
    getById(id: { userId: string; }) {
        return Usuario.findById(id.userId);
    }
    getUser(usuario: { email: string, senha: string }) {
        return Usuario.findOne(usuario);
    }
    create(usuario: { _id: any; }) {
        return Usuario.create(usuario)
    }
    delete(id: { userId: any; }) {
        return Usuario.deleteMany(id);
    }
    update(id: any, usuario: any) {
        return Usuario.findByIdAndUpdate(id, usuario);
    }
}

export default new RepositoryUsuario();

