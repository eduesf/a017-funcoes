// Resolução do Exercício 3

// função de soma

const somaNumeros = (num1, num2) => {
    let resultado = num1+num2
    return (`${num1} + ${num2} = ${resultado}`)
}


// função de subtração

const subtraiNumeros = (num1, num2) => {
    let resultado = num1-num2
    return (`${num1} - ${num2} = ${resultado}`)
}

// função de multiplicação

const multiplicaNumeros = (num1, num2) => {
    let resultado = num1*num2
    return (`${num1} x ${num2} = ${resultado}`) 
}

// função de divisão

const divideNumeros = (num1, num2) => {
    let resultado = num1/num2
    return (`${num1} / ${num2} = ${resultado}`)
}

let num1 = Number(prompt("Informe o primeiro número."))
let num2 = Number(prompt("Informe o segundo número."))

console.log (somaNumeros(num1,num2))
console.log (subtraiNumeros(num1,num2))
console.log (multiplicaNumeros(num1,num2))
console.log (divideNumeros(num1,num2))
