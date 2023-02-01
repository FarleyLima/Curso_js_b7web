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
