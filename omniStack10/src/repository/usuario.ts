import { Usuario } from '../models/usuario/usuario';



class RepositoryUsuario {

    constructor() { }

    getAll() {
        return Usuario.find();
    }
    getById(id: { userId: string; }) {
        return Usuario.findById(id);
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

