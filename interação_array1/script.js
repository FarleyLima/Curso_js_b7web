let suplementos = [
  'Creatina',
  'Whey Protein',
  'BCAA',
  'ZMA',
  'GH',
  'Glutamina',
  'Testo Drol'
]

/* 
filtrando itens do array quem tem mais menos que 3 letras. usando a função filter.
A função filter deve ser armazenada em uma variável!!!
*/

let check = suplementos.filter(value => {
  // aqui, estou dizendo que é para filtrar os itens do array que tem igual ou menos de 4 letras
  if (value.length <= 4) {
    return true
  } else {
    return false
  }
})

console.log(
  `Esses são sumplementos com igual ou menos de 4 caracteres: ${check}`
)

/*
 Simplificando  a formula filtrando o itens com mais de 5 caracteres
 */

let check2 = suplementos.filter(value => value.length >= 5)

console.log(
  `Esses são sumplementos com igual ou mais de 5 caracteres: ${check2}`
)

// FUNÇÃO EVERY \\

let sumplementos2 = [
  'Creatina',
  'Creatina',
  'Creatina',
  'Creatina',
  'Creatina',
  'Testo drol'
]

let verificar = sumplementos2.every(value => {
  return value === 'Creatina'
})

if (verificar) {
  console.log('Todo o estoque de suplementos é de Creatinas')
} else {
  console.log('Não tem somente creatinas no estoque')
}

// FUNÇÃO SOME \\
/*
ele verifica se há algum item dentro do array especifico
*/

let verificar2 = sumplementos2.some(value => {
  return value === 'BCAA'
})

if (verificar) {
  console.log('Em Todo o estoque alguns suplementos é de BCAA')
} else {
  console.log('Não tem BCAA no estoque')
}

// FUNÇÃO INCLUDES \\
/*
Ela vai verificar se há um intem especifico no array 
*/

let pecas = ['mola', 'parafuso', 'arroela', 'prego']

if (pecas.includes('prego')) {
  console.log('Tem pregos no estoque')
} else {
  console.log('Não tem pregos no estoque')
}

console.log(pecas)
