// EXERCICÍCIO #1
/* Calcule a porcentagem entre 2 números
Exemplo:  45 de 55 é qyantos porcentos ?
Formula de porcentagem: (x / y) * 100
*/

function infoPorcent(x, y) {
  var result = (x / y) * 100
  return result
}

var resultFinal = infoPorcent(40, 55)
console.log(`O valor é ${resultFinal}%`)

// EXERCÍCIO #2
/* 
Calcule o proço do imóvel
- m2 = 3000 (valor do metro quadrado)
CONDIÇÕES
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.5x
- Se tiver 3 quarto, o m2 é 2.5x
 */

var m2 = 3000
let areaI = 900
var opc1 = 1
var opc2 = 1.4
var opc3 = 1.9

function valorImo(opc1, opc2, opc3) {
  var imov = m2 * areaI
  var imov1 = imov * opc1
  return imov1
}

var compra = valorImo(1, 1.4, 1.9)

console.log(`O valor do imóvel é de R$ ${compra}`)

// EXERCICÍCIO #3

function acessar(usuario, senha) {
  if (usuario === 'farley lima' && senha === 147852) {
    return true
  } else {
    return false
  }
}

let usuario = 'farley lima'
let senha = 147852

let confirmar = acessar(usuario, senha)
if (confirmar) {
  console.log('Usuário e senha corretos, o login está sendo feito!')
} else {
  console.log('Usuário e senha incorretos. Digite novamente!')
}
