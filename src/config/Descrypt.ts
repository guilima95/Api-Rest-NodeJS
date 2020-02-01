import { Decryptor, Encryptor } from 'strong-cryptor'

const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12' // store this key in secure place

export const Descrypt = (hash: string): string => {

    const decryptor = new Decryptor({ key })
    return decryptor.decrypt(hash)

}