/* 1# SUBSTITUA O @ PELA CONDICIONAL PARA QUE O RESULTADO SEJA TRUE */
// let x = 10
// let x = 5
// console.log(x @ y)

// RESOLUÇÃO

let x = 10
let y = 5
console.log(x > y)

/* #2 SUBSTITUA O @ PELA CONDICIONAL PARA QUE O RESULTADO SEJA FALSE */
// let W = "10"
// let Z = 10
// console.log(x @ y)

// RESOLUÇÃO

let w = '10'
let z = 10
console.log(w === z)

/* #3 SUBSTITUA O @ PELA CONDICIONAL PARA QUE O RESULTADO SEJA FALSE*/
// let a = 20
// let b = 15
// console.log(a @ b)

// RESOLUÇÃO

let a = 20
let b = 15
console.log(a > b + 10)

/* #4 CRIE UMA CONDICIONAL PARA VERIFICAR SE O PREÇO DA CARNE ESTÁ BARATO OU CARO. PS: ATÉ 45 ESTÁ BARATO! */

let preco = 50
let carne = preco <= 45

if (preco > 45) {
  console.log('A carne está cara!')
} else {
  console.log('o preço da carne está barata')
}
