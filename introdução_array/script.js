// --- CRIANDO UMA LISTA SIMPLES COM ARRAY --- //
let colors = ['blue', 'red', 'yelon', 'green', 'black']

console.log(colors[0])

// --- NESTE EXEMPLO ESTOU EXIBINDO A LISTA COLORS DENTRO DA ARRAY LIST1 --- //

let list1 = [colors, 'carro', 'moto', 'barco']

console.log(list1[0])

// --- NESTE EXEMPLO ESTOU CRIANDO A LISTA DENTRO DA ARRAY LIST2 --- //

let list2 = ['sabão', ['sabugo', 50, 'R$:300'], 500, 'shampoo']

console.log(list2[1])

// --- NESTE EXEMPLO ESTOU ACESSANDO A LISTA DENTRO DA ARRAY LIST2 E BUSCADO O ITEM "R$:300" --- //

console.log(list2[1][2])

// --- ARMAZENANDO O ITEM 3 " SHAMPOO " DENTRO DE UMA VARIÁVEL --- //
let opc = list2[3]

console.log(opc)

// ----     OPERAÇÕES BÁSICAS COM ARRAY     ---- //

var pecasAuto = ['radiador', 'pistão', 'parafusos', 'filto de óleo']

// para saber a quantidade de itens de uma array ( lista ), deve chamar a lista .length

console.log(`O total de itens de peças é ${pecasAuto.length}`)

// para adicionar um item na lista deve usar o push. doloca o nome da lista segido .push.

var pecasAuto2 = ['radiador', 'pistão', 'parafusos', 'filto de óleo']

pecasAuto2.push('velas')

console.log(`O total de itens de peças da lista 2 é ${pecasAuto2.length}`)

// ---- EXERCÍCIOS ---- \\

// #1 NO ARRAY ABAIXO, QUAL O NÚMERO QUE PAGA A FERRARI?

let carros = ['BMW', 'AUDI', 'PORCHE', 'FERRARI', 'LAMBORGHINI']
// RESOLUÇÃO \\
console.log(`O numero 3 é referente ao carro da marca: ${carros[3]}`)

// #2 TROQUE A LAMBORGHINI OR MCLAREM

// RESOLÇÃO \\
carros.pop('LAMBORGHINI')
carros.push('MCLAREM')
console.log(carros)

// #3 ADICINE A MASSERATI A LISTA

// RESOLUÇÃO \\

carros.push('MASSERATI')
console.log(carros)

// #4 EXIBA QUANTOS INTENS TEM NA LISTA

// RESOLUÇÃO \\

console.log(
  `Trabalhamos coms com total de ${carros.length} marcas de carros, são elas: ${carros}`
)
