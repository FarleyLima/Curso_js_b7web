// --- PRATICANDO, CRIANDO UM OBJETO SIMPLES --- \\

let personagem = {
  nome: 'Chico Lopes',
  idade: 14,
  estado: 'Ceará',
  cidade: 'Pereiro',
  cep: '63460-000',
  armas: ['Revolver', 'Pistola', 'Fuzil', 'Escopeta'],
  // outro objeto dentro do objeto personagem.
  habilidade: {
    forca: 200,
    velocidade: 20,
    qi: 85,
    testo: 'alta'
  }
  // array dentro do objeto personagem
}

//  acionando o objeto. Vai ser exibidos as informações do obejeto " personagem "//

console.log(personagem)

// acionado uma caracteristica especifica do objeto \\

console.log(personagem.nome)

// exemplos#2 \\

console.log(
  `Meu nome é ${personagem.nome}, tenho ${personagem.idade} anos de idade, moro no estado do ${personagem.estado}, na cidade de ${personagem.cidade} e seu Cep é ${personagem.cep}`
)

// acessando as caracteristica do objeto ' habilidade ' dentro do objeto personagem.

console.log(personagem.habilidade)

// acionado uma caracteristica especifica do objeto habilidades \\

console.log(personagem.habilidade.forca)
// melhorando sua visualização \\

console.log(
  `O personagem ${personagem.nome} tem uma força de ${personagem.habilidade.forca} kgf e possuí uma velocidade de ${personagem.habilidade.velocidade} kmh.`
)

// acessando a lista array no objeto personagem \\

console.log(personagem.armas)

// acessando uma caracteristica de o array ' armas ', dentro do obejeto ' personagem ' \\

console.log(personagem.armas[2])

// ---- ACESSANDO E ALTERANDO OBJETOS ---- \\

// criando obejeto personagem #2
let personagem2 = {
  nome: 'Jack',
  iadade: 20,
  mundo: 'Marte',

  equipamentos: ['faca militar', 'kit sobrevivência'],

  golpes: {
    punho: 'suave',
    chute: 'supremo',
    energia: 250
  }
}

console.log(personagem2)

// alterando o nome do personagem #2. Alterando a o valor da propriedade.

personagem2.nome = 'Jackinho'

console.log(personagem2.nome)

// alterando a energia do personagem #2. Alterando a o valor da propriedade.

personagem2.golpes.energia += 100

console.log(
  `A energia de ${personagem2.nome} foi aumentada para ${personagem2.golpes.energia}%`
)

// alterando  o array, adicionado mais opções.

personagem2.equipamentos.push('Barraca')

console.log(personagem2.equipamentos[2])

// ---- PRATICA #2 ---- \\

let loja = {
  nome: 'FL autos',
  horaF: 'Das 08:00hrs as 18:00hrs',

  veiculos: [
    { marca: 'Fiat', modelo: 'Toro ultra', motor: 2.0, valor: 220 },
    { marca: 'Ford', modelo: 'Ranger Limited', motor: 3.2, valor: 275 },
    { marca: 'Chevrolet', modelo: 'S10 Z10', motor: 3.2, valor: 285 }
  ]
}

// acessando os dados do objeto " loja "

console.log(loja)

console.log(`Nova loja de veículos ${loja.nome}, venha conferir nosso estoque!`)

// acessando e visualizando a lista array e os obejetos dentro dela .

var carro3 = loja.veiculos[1].valor
console.log(`Chevrolet S10 z10 custa R$ ${carro3} mil. `)
