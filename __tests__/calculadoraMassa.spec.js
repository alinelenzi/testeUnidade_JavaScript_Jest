const calculadora = require('../src/calculadora')

const massa = require('../fixtures/massa')

test.each(massa.array.map(bloco => [
    bloco.num1,
    bloco.num2,
    bloco.esperadoSoma]))
    ('somarDoisNumeros %f + %f', (num1, num2, resultadoEsperado) => { 
        // Executa
        const resultadoObtido = calculadora.somarDoisNumeros(num1, num2)
        //  Valida
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

test.each(massa.array.map(bloco => [
    bloco.num1,
    bloco.num2,
    bloco.esperadoSubtração]))
    ('subtrairDoisNumeros %f - %f', (num1, num2, resultadoEsperado) => { 
        // Act
        const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2)

        //  Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

test.each(massa.array.map(bloco => [
    bloco.num1,
    bloco.num2,
    bloco.esperadoMultiplicação]))
    ('multiplicarDoisNumeros %f * %f', (num1, num2, resultadoEsperado) => { 
        // Act
        const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2)

        //  Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
    })

test.each(massa.array.map(bloco => [
    bloco.num1,
    bloco.num2,
    bloco.esperadoDivisão]))
    ('dividirDoisNumeros %f / %f', (num1, num2, resultadoEsperado) => { 
        // Act
        const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2)

        //  Assert
        expect(resultadoObtido).toBe(resultadoEsperado)
        if(resultadoObtido == Infinity){
            console.log('Não é possível dividir por zero')
        }
        console.log(`Resultado Esperado = ${resultadoEsperado} == Resultado Obtido = ${resultadoObtido}`)
    })