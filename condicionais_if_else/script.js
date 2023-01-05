// Praticando com condicionais simples

var age = 15

if (age >= 18) {
  console.log('você é MAIOR de idade!')
} else {
  console.log('Voçê é MENOR de idade!')
}

// Exemplo #2

var number = 60

if (number > 40) {
  console.log('O numero number é MAIOR')
} else {
  console.log('O numero number é MENOR')
}

// MULT-CONDICIONAIS &&

var wege = 1500

if (wege > 1320 && wege < 2000) {
  console.log('O salário é maior que R$ 1320')
}

// CONDICIONAL DUPLA ( IF ELSE )

var person1 = 1000
var person2 = 2500
var person3 = 3000

if (person1 > person2) {
  console.log('person1 é mais rica que person2')
} else if (person2 > person1 && person2 > person3) {
  console.log('person2 é mais rica que person1 e 3')
} else if (person3 > person2 && person3 > person1) {
  console.log(`person3 é mais rico de todos, pois ele tem R$ ${person3}.`)
}
