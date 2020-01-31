import crypto = require('crypto');



export const Descrypt = (senha: string, hash: string): boolean => {

    var mykey = crypto.createDecipher('aes-128-cbc', senha);
    var mystr = mykey.update(hash, 'hex', 'utf8')
    mystr += mykey.final('utf8');

    if (mystr !== senha)
        return false;

    return true;

}
