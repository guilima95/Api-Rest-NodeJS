import * as CryptoTS from "crypto-ts";

export const Encrypt = (data: string) => {
    CryptoTS.AES.encrypt(data, 'concrete123');
    return data;
}









