// ==== DECLARANDO FUNÇÕES ====

// EXEMPLO #1
function nameFuncao() {
  console.log('testando  a função')
  console.log('teste')
}

// ==== CHAMANDO A FUNÇÃO ====

nameFuncao()

// ==== PASSANDO PARÂMETROS EM FUÇÕES ==== //

// parametros de ENTRADA//
function somar(n1, n2, n3) {
  var resultado = n1 + n2 + n3
  console.log(`O resultado da somatória é ${resultado}`)
}
// parametros de SAÍDA //
somar(5, 6, 20)

// EXEMPLO #2
// parametros de ENTRADA//
function nomeCompleto(nome, sobrenome) {
  console.log(`Meu nome é ${nome} ${sobrenome}`)
}
// parametros de SAÍDA //
nomeCompleto('Farley', 'Lima')

// ==== RETORNO DA FUNÇÃO return ==== //

/*
EXEMPLO #1
*/

// esta função está recebendo parametros e esta retornado o resultado
function operacaoMat(op1, op2, op3) {
  let result = op1 + op2 + op3
  let result2 = result * 2
  return `O resulta das operação é ${result2}`
}

// aqui está sendo executado  a função "operacaoMat" e o retorno dela está armazenado na variaável "final" onde irá ser retornado. //
let final = operacaoMat(45, 32, 20)

console.log(final)

/*
EXEMPLO #2 
*/
function nameComplet(name, lastname) {
  return `Seu nome é ${name} ${lastname}`
}

let completo = nameComplet('Joca', 'Moloca')
console.log(completo)

// === FUÇÃO COM RETORNO CONDICIONAL === //

//criando a função
function valorCarro(preco) {
  if (preco >= 23000) {
    return true
  } else {
    return false
  }
}

//executando a função
var compra = valorCarro(30000)
console.log(compra)

// EXEMPLO #2

//criando a função
function salarioMin(valor) {
  if (valor >= 1310) {
    return true
  } else {
    return false
  }
}

//executando a função
var valor = 1500
var seuSalario = salarioMin(valor)
if (seuSalario) {
  console.log(`O valor do seu salário é R$ ${valor}`)
} else {
  console.log('Você recebeu menos que um salário mínimo')
}

// EXEMPLO #3

function boletimE(nota) {
  if (nota >= 7) {
    return 'aprovado'
  } else {
    return 'reprovado'
  }
}

let nota = 20
let avalicao = boletimE(nota)
if (avalicao) {
  console.log(`Sua nota foi ${nota}, PARABÉNS!!! Voçê passou :)`)
} else {
  console.log(`Sua nota foi ${nota}, que PENA, você não passou :(`)
}
