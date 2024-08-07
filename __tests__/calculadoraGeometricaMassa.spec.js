const calculadora = require('../src/calculadoraGeometrica')

const massa = require('../fixtures/massa2')

test.each(massa.array.map(bloco =>[
    bloco.lado,
    bloco.esperadoQuadrado
]))
    ('calcularAreaQuadrado %f**2', (lado, resultadoEsperado) => {
        const resultadoObtido = calculadora.calcularAreaQuadrado(lado);
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

test.each(massa.array.map(bloco =>[
    bloco.base,
    bloco.altura,
    bloco.esperadoParalelogramo
]))
    ('calcularAreaParalelogramo %f * %f', (base, altura, resultadoEsperado) => {
        const resultadoObtido = calculadora.calcularAreaParalelogramo(base, altura);
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

test.each(massa.array.map(bloco =>[
    bloco.base,
    bloco.altura,
    bloco.esperadoTriangulo
]))
    ('calcularAreaTriangulo %f * %f /2', (base, altura, resultadoEsperado) =>{
        const resultadoObtido = calculadora.calcularAreaTriangulo(base, altura);
        expect(resultadoObtido).toBe(resultadoEsperado)
    })