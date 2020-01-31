//import bcrypt = require("bcrypt");
import crypto = require('crypto');


export const Hash = (data: string): string => {
    var decrypt = crypto.createHash('md5').update(name).digest('hex');
    return decrypt;
}









