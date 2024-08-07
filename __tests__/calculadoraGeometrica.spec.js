const calculadora = require('../src/calculadoraGeometrica')

test('calcularAreaQuadrado', () => {
    const lado = 3;
    const resultadoEsperado = 9;

    const resultadoObtido = calculadora.calcularAreaQuadrado(lado);
    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('calcularAreaParalelogramo', () => {
    const base = 5;
    const altura = 6;
    const resultadoEsperado = 30;

    const resultadoObtido = calculadora.calcularAreaParalelogramo(base, altura);
    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('calcularAreaTriangulo', () =>{
    const base = 5;
    const altura = 6;
    const resultadoEsperado = 15;

    const resultadoObtido = calculadora.calcularAreaTriangulo(base, altura);
    expect(resultadoObtido).toBe(resultadoEsperado)
})