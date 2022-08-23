// Resolução do Exercício 2

// a)

function somaNumeros (num1,num2) {
    return num1 + num2
}

console.log (somaNumeros (4,6))
console.log (somaNumeros (18,22.5))


// b)

function comparaNumeros(numero1,numero2) {
    let numBooleana
    if (numero1 >= numero2){
        numBooleana = true
    }
    return numBooleana
}

console.log (comparaNumeros (8,6))
console.log (comparaNumeros (10,10))
console.log (comparaNumeros (10,12))


// c)

function numPar (numero){
    if (numero %2 === 0) {
        return (`O numero ${numero} é par!`)
    }
}

console.log (numPar (16))
console.log (numPar (35))


// d)

const recebeString = (string)=> {
    return (`O tamanho da palavra ${string.toUpperCase()} é: ${string.length}`)
}

console.log (recebeString ("Eduardo"))
console.log (recebeString ("mesa"))
console.log (recebeString ("celular quebrado"))
