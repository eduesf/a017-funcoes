// Resolução do Exercício 2

// a)

function somaNumeros (num1,num2) {
    const resultado = num1 + num2
    console.log (resultado)
}

somaNumeros (4,6)
somaNumeros (18,22.5)


// b)

function comparaNumeros(numero1,numero2) {
    if (numero1 >= numero2){
        console.log(true)
    }
}

comparaNumeros (8,6)
comparaNumeros (10,10)
comparaNumeros (10,12)


// c)

function numPar (numero){
    if (numero %2 === 0) {
        console.log(`O numero ${numero} é par!`)
    }
}

numPar (16)
numPar (35)


// d)

function recebeString (string){
    console.log (`O tamanho da palavra ${string.toUpperCase()} é: ${string.length}`)
}

recebeString ("Eduardo")
recebeString ("mesa")
recebeString ("celular quebrado")
