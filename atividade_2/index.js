// ## Importe a biblioteca ##

let rs = require ('readline-sync')

// ## Faça o código ##

let perg1 = rs.question ('Você está usando máscara quando precisa sair de casa? (Sim ou Não) \n')

let perg2 = rs.question ('Você está lavando as mãos frequentemente? (Sim ou Não) \n')

if (perg1 == 'Sim' && perg2 == 'Sim') {
    console.log ('Parabéns, você está contribuindo para a contenção do vírus!')
}
else {
    console.log ('Cuidado, você pode estar correndo risco de vida!')
}
