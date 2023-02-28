function click() {
  const list = document.querySelector('#lista1')
  const list1 = list.querySelector('ul')

  newButton = document.createElement('button')
  newButton.innerHTML = 'clique aqui!'

  list1.before(newButton)
}
