import { Usuario } from '../models/usuario';

class RepositoryUsuario {

    constructor() { }

    getAll() {
        return Usuario.find();
    }
    getById(id: { userId: string; }) {
        return Usuario.findById(id.userId);
    }
    getUser(usuario: any) {
        let login = { email: usuario }
        return Usuario.findOne(login);
    }
    create(usuario: any) {
        return Usuario.create(usuario)
    }
    delete(id: any) {
        return Usuario.deleteOne(id);
    }
    update(id: any, usuario: any) {
        return Usuario.findByIdAndUpdate(id, usuario);
    }
}

export default new RepositoryUsuario();

