// DEFININDO UMA FUNÇÃO NORMALMENTE

/*
function somar(n1, n2) {
  return n1 + n2
}
*/

// DEFININDO A FUNÇÃO ACIMA COM ARROW FUNCTION
/*
const somar = (n1, n2) => {
  return n1 + n2
}
*/

// DEIXANDO O CÓDIGO A CIMA MENOR

const somar = (n1, n2) => n1 + n2

let resultado = somar(15, 32)
console.log(`O resultado da somatória é ${resultado}`)

// EXEMPLO UNSANDO UM FUNÇÃO COM APENAS 1 (UM) PARÂMETRO
// função simples
/*
function nome(sob) {
  return 'Farley ' + sob
}
console.log(nome('Lima'))
*/

// MESMA FUNÇÃO COM APENAS 1 (UM) PARÂMETRO USANDO ARROU FUNCTION

/*
const nome = sob => 'Farley ' + sob
console.log(nome('Lima'))
*/

// PRATICANDO

const nomeCompleto = (primeiroNome, sobreNome, segundoNome, ultimoNome) => {
  let juncao = primeiroNome + sobreNome + segundoNome + ultimoNome
  return juncao
}
console.log(nomeCompleto('Francisco ', 'Farley ', 'Lima ', 'Silva'))
