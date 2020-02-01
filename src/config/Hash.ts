import { Encryptor } from 'strong-cryptor'

const key = 'AHBSGTEUET125STSGBDHDJKXMPLKIU12'

export const Hash = (data: string): string => {
    const encryptor = new Encryptor({ key })
    return encryptor.encrypt(data)

}









