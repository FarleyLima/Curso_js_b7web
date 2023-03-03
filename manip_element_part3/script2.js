function click() {
  const list = document.querySelector('#lista1')
  const list1 = list.querySelector('ul')
  // ADICIONANDO UM NOVO BOTÃO
  const newButton = document.createElement('button')
  newButton.innerHTML = 'clique aqui!'

  list1.before(newButton)

  // CRIANDO UMA NOVA LISTA
  let novalista = document.createElement('ul')

  for (let i = 0; i < 5; i++) {
    let novalista = document.createElement('li')
    novalista.innerHTML = 'Novo item' + i
    novalista.append(novalista)
  }
}
