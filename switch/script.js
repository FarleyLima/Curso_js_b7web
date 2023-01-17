let profession = 'professor'

console.log(`${profession} este é o seu fardamento:`)

switch (profession) {
  case 'enfermeiro': // condicional
    console.log('Fardamento rosa') // é código da condicional
    break
  case 'medico':
    console.log('Fardamento branco')
    break
  case 'policial':
    console.log('Fardamento azul marinho')
    break
  case 'bombeiro':
    console.log('Fardamento vermelho')
    break
  default: // é padrão, caso não tenha nehum das profissões definidas vai aparecer o pardão especifico!
    console.log('fardamento não definido!')
    break
}

let carros = 'gol'

console.log(`${carros} a cor disponivel é:!`)

switch (carros) {
  case 'ferrari':
    console.log('cor do carro é vermelho')
    break

  case 'porche':
    console.log('cor do carro é preto')
    break

  case 'lamborguini':
    console.log('cor do carro é verde')
    break
  default:
    console.log('carro não definido!')
    break
}
