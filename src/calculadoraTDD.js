//TDD - Ir fazendo o teste enquando o código vai sendo escrito, até chegar o final, não espera o fim da construção do código para escrever o teste de unidade

let somarDoisNumeros = function somarDoisNumeros(num1, num2){
    return num1 + num2
}//fim da função somarDoisNumeros

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2){
    return num1 - num2
}//fim da função subtrairDoisNumeros

let multiplicarDoisNumeros =  (num1, num2) => num1 * num2 

let dividirDoisNumeros =  (num1, num2) => num1 / num2

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
}