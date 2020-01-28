import bcrypt = require("bcrypt");


export const Descrypt = (senha: string, hash: string): boolean => {
    return bcrypt.compareSync(senha, hash);
}
