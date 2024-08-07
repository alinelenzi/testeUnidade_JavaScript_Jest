const calculadora = require('../src/calculadora')

//DDT
//Data Driven Testing
//Teste Direcionado por Dados (Teste com Massa de Teste)

//massa de teste = é uma massa de dados com resultado esperado

//Arrange - Dados de Entrada e Saída (Resultado Esperado
let massaSoma = [
    [2, 3, 5],
    [2, 3.5, 5.5]

]

test.each(massaSoma)('somarDoisNumeros %f + %f', (num1, num2, resultadoEsperado) => { 
    // Executa
    const resultadoObtido = calculadora.somarDoisNumeros(num1, num2)
    console.log(`num1 = ${num1} + num2 = ${num2} = resultado Obtido = ${resultadoObtido}`)

    //  Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
})


let massaSubtrair = [
    [2, 3, -1],
    [5, 3.5, 1.5]
]

test.each(massaSubtrair)('subtrairDoisNumeros %f - %f', (num1, num2, resultadoEsperado) => { 
    // Act
    const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
})


let massaMultiplicar = [
    [2, 3, 6],
    [2, 3.5, 7]
]


test.each(massaMultiplicar)('multiplicarDoisNumeros %f * %f', (num1, num2, resultadoEsperado) => { 
    // Act
    const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
})

let massaDividir = [
    [7, 2, 3.5],
    [2, 0, Infinity],
    [6, 2, 3]
]


test.each(massaDividir)('dividirDoisNumeros %f / %f', (num1, num2, resultadoEsperado) => { 
    // Act
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
    if(resultadoObtido == Infinity){
        console.log('Não é possível dividir por zero')
    }
    console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
})