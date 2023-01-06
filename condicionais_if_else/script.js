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

// DESMISTIFICANDO O IF

var valorDinheiro = 20000
var volksGol = valorDinheiro > 25000

if (valorDinheiro > 25000) {
  console.log(
    `Com o valor de R$ ${valorDinheiro} é possivel comprar o carro Gol`
  )
} else {
  console.log(
    `Com o valor de R$ ${valorDinheiro} NÂO é possivel comprar o carro Gol`
  )
}

// EXEMPLOS BÁSICOS

var money = 3500

var viagemOpc1 = money >= 4000 && money < 5000
var viagemOpc2 = money >= 6000 && money <= 8000

if (viagemOpc1) {
  console.log('Da para VIAJAR sem hotel!!!')
} else if (viagemOpc2) {
  console.log('Dar para viajar com hospedagem :D')
} else {
  console.log(`O  valor de R$ ${money} não é suficiente!`)
}
