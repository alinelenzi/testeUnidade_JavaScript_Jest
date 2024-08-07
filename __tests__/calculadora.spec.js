const calculadora = require('../src/calculadora')

test('somarDoisNumeros', () => { 
    // AAA == 3A
    // Arrange, Act, Assert
    // Configura, Executa, Valida

    //Configura - Dados de Entrada e Saída (Resultado Esperado)
    const num1 = 2
    const num2 = 3
    const resultadoEsperado = 5

    // Executa
    const resultadoObtido = calculadora.somarDoisNumeros(num1, num2)
    console.log(`num1 = ${num1} + num2 = ${num2} = resultado Obtido = ${resultadoObtido}`)

    //  Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
})

test('subtrairDoisNumeros', () => { 
    //Arrange - Dados de Entrada e Saída (Resultado Esperado)
    const num1 = 2
    const num2 = 3
    const resultadoEsperado = -1

    // Act
    const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('multiplicarDoisNumeros', () => { 
    //Arrange - Dados de Entrada e Saída (Resultado Esperado)
    const num1 = 2
    const num2 = 3
    const resultadoEsperado = 6

    // Act
    const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
})

test('dividirDoisNumeros', () => { 
    //Arrange - Dados de Entrada e Saída (Resultado Esperado)
    const num1 = 7
    const num2 = 2
    const resultadoEsperado = 3.5

    // Act
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
})

test('dividirPorZero', () => { 
    //Arrange - Dados de Entrada e Saída (Resultado Esperado)
    const num1 = 7
    const num2 = 0
    const resultadoEsperado = Infinity

    // Act
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2)

    //  Assert
    expect(resultadoObtido).toBe(resultadoEsperado)
    if(resultadoObtido == Infinity){
        console.log('Não é possível dividir por zero')
    }
    console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
})