import usuario from '../repository/usuario';
import chai = require('chai');

const assert = chai.assert;

const usuarioMock = {

    "nome": "Concrete",


    "email": "concrete@gmail.com",
    "senha": "Samella",

    "telefones": [

        {

            "numero": "123456789",

            "ddd": "11"

        }

    ]

}


describe('TDD de cadastro Usuário', () => {
    it('Deve retornar statusCode 201', () => {
        assert.equal(usuario.create(usuarioMock), );
    });

    // it('Teste: Deve Subtrair 2 Números', () => {
    //     assert.equal(calculadora.subtrair(10, 5), 5);
    // });

    // it('Teste: Deve Multiplicar 2 Números', () => {
    //     assert.equal(calculadora.multiplicar(10, 5), 50);
    // });

    // it('Teste: Deve dividir 2 Números', () => {
    //     assert.equal(calculadora.dividir(18, 2), 9);
    // });
});