const calculadora = require('../src/calculadoraGeometrica')

let massaQuadrado = [
    [2, 4],
    [2.55, 6.5024999999999995],
    [11, 121],
    [100, 10000],
    [5, 25]
]
test.each(massaQuadrado)('calcularAreaQuadrado %f**2', (lado, resultadoEsperado) => {
    const resultadoObtido = calculadora.calcularAreaQuadrado(lado);
    expect(resultadoObtido).toBe(resultadoEsperado)
})


let massaParalelogramo = [
    [2, 2, 4],
    [22.55, 8.55, 192.8025],
    [11, 10, 110],
    [100, 16.5, 1650],
    [5, 20, 100]
]
test.each(massaParalelogramo)('calcularAreaParalelogramo %f * %f', (base, altura, resultadoEsperado) => {
    const resultadoObtido = calculadora.calcularAreaParalelogramo(base, altura);
    expect(resultadoObtido).toBe(resultadoEsperado)
})


let massaTriangulo= [
    [2, 2, 2],
    [22.55, 8.55, 96.40125],
    [11, 10, 55],
    [100, 16.5, 825],
    [5, 20, 50]
]
test.each(massaTriangulo)('calcularAreaTriangulo %f * %f /2', (base, altura, resultadoEsperado) =>{
    const resultadoObtido = calculadora.calcularAreaTriangulo(base, altura);
    expect(resultadoObtido).toBe(resultadoEsperado)
})