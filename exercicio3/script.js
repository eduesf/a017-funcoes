// Resolução do Exercício 3

// função de soma

function somaNumeros (num1, num2) {
    let resultado = num1+num2
    console.log (`A soma dos números ${num1} e ${num2} é: ${resultado}`)
}

// função de subtração

function subtraiNumeros (num1, num2) {
    let resultado = num1-num2
    console.log (`A subtração dos números ${num1} e ${num2} é: ${resultado}`)
}

// função de multiplicação

function multiplicaNumeros (num1, num2) {
    let resultado = num1*num2
    console.log (`A multiplicação dos números ${num1} e ${num2} é: ${resultado}`)
}

// função de divisão

function divideNumeros (num1, num2) {
    let resultado = num1/num2
    console.log (`A divisão dos números ${num1} e ${num2} é: ${resultado}`)
}

let num1 = Number(prompt("Informe o primeiro número."))
let num2 = Number(prompt("Informe o segundo número."))

somaNumeros(num1,num2)
subtraiNumeros(num1,num2)
multiplicaNumeros(num1,num2)
divideNumeros(num1,num2)
