import * as CryptoTS from "crypto-ts";

export const Descrypt = (text) => {
    const bytes = CryptoTS.AES.decrypt(text.toString(), 'concrete123');
    text = JSON.parse(bytes.toString(CryptoTS.enc.Utf8));
}


