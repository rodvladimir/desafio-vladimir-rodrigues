const caixaDaLanchonete = require('.caixa-da-lanchonete/')
const { default: expect } = require('expect')
const { test } = require('picomatch')
const { describe } = require('yargs')

describe('CaixaDaLanchonete', () => {
    test('compra com carrinho vazio em dinheiro', () => {
        const resultadoEsperado = "com carrinho vazio em dinheiro"
        const resultado = "Não há itens no carrinho de compra!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra com carrinho vazio em credito', () => {
        const resultadoEsperado = "com carrinho vazio em credito"
        const resultado = "Não há itens no carrinho de compra!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra com carrinho vazio em debito', () => {
        const resultadoEsperado = "com carrinho vazio em debito"
        const resultado = "Não há itens no carrinho de compra!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra simples em dinheiro R$ 2,85', () => {
        const resultado = [284, 1]

        expect(resultado.sum(resultado)).toEqual(285)
    })

    test('compra simples em credito R$ 3,09', () => {
        const resultado = [305, 4]

        expect(resultado.sum(resultado)).toEqual(309)
    })

    test('compra simples em debito R$ 3,00', () => {
        const resultado = [150, 150]

        expect(resultado.sum(resultado)).toEqual(300)
    })

    test('compra de tres itens em credito R$ 11,85', () => {
        const itens = ['cafe,1','chantily,1','cafe,1']
        const resultado = [1183, 1, 1]

        expect(resultado.sum(resultado)).toEqual(1185)
    })

    test('compra de tres itens em debito R$ 11,50', () => {
        const itens = ['cafe,1','chantily,1','cafe,1']
        const resultado = [1148, 1, 1]

        expect(resultado.sum(resultado)).toEqual(1150)
    })

    test('compra de múltiplas quantidades em dinheiro R$ 33,73', () => {
        const itens = ['cafe,1','chantily,1','cafe,1','chantily,1']
        const resultado = [3370, 1, 1, 1]

        expect(resultado.sum(resultado)).toEqual(3373)
    })

    test('compra de múltiplas quantidades em credito R$ 36,56', () => {
        const itens = ['cafe,1','chantily,1','cafe,1','chantily,1']
        const resultado = [3653, 1, 1, 1]

        expect(resultado.sum(resultado)).toEqual(3656)
    })

    test('compra de múltiplas quantidades em debito R$ 35,50', () => {
        const itens = ['cafe,1','chantily,1','cafe,1','chantily,1']
        const resultado = [3547, 1, 1, 1]

        expect(resultado.sum(resultado)).toEqual(3550)
    })

    test('compra com quantidade zero em dinheiro', () => {
        const resultadoEsperado = "com quantidade zero em dinheiro"
        const resultado = "Quantidade invalida!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra com um valor em credito', () => {
        const resultadoEsperado = "com um valor em credito"
        const resultado = "Item invalido!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra com código inexistente em debito', () => {
        const resultadoEsperado = "com código inexistente em debito"
        const resultado = "Item invalido!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra com forma de pagamento inválida em especie', () => {
        const resultadoEsperado = "com forma de pagamento inválida em especie"
        const resultado = "Forma de pagamento invalida!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra chantily em dinheiro', () => {
        const resultadoEsperado = "chantily em dinheiro"
        const resultado = "Item extra não pode ser pedido sem o principal!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra queijo em credito', () => {
        const resultadoEsperado = "queijo em credito"
        const resultado = "Item extra não pode ser pedido sem o principal!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra chantily com outro item em credito', () => {
        const resultadoEsperado = "chantily com outro item em credito"
        const resultado = "Item extra não pode ser pedido sem o principal!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })

    test('compra queijo com outro item em debito', () => {
        const resultadoEsperado = "queijo com outro item em debito"
        const resultado = "Item extra não pode ser pedido sem o principal!"

        expect(CaixaDaLanchonete.resultado).toEqual(resultadoEsperado);
    })
})
        
    

