import bcrypt = require("bcrypt");



export const Hash = (data: string): string => {
    var decrypt = bcrypt.hashSync(data, 8);
    return decrypt;

}









