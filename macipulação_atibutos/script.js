function clicar() {
  const praTic = document.querySelector('#lista2')
  const teste = praTic.querySelector('ul')

  let novoBotao = document.createElement('button')
  novoBotao.innerHTML = 'Clique teste'

  teste.before(novoBotao)
}
