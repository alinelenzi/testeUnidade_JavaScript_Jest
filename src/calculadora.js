let somarDoisNumeros = function somarDoisNumeros(num1, num2){
    return num1 + num2

}//fim da função somarDoisNumeros

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2){
    return num1 - num2

}//fim da função subtrairDoisNumeros

let multiplicarDoisNumeros =  (num1, num2) => num1 * num2 // sem chave pq é só uma linha
//função de flecha ou arrow function

let dividirDoisNumeros =  (num1, num2) => num1 / num2

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
}