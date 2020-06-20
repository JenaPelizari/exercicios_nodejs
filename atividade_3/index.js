// ## Importe a biblioteca ##

let rs = require ('readline-sync')

// ## Faça o código ##

let tamanho = rs.question ('Qual é o tamanho dos lados do quadrado?')

let area = tamanho * tamanho

console.log ('A área do seu quadrado é' + area + 'cm')