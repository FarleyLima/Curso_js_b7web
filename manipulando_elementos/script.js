// MANIPULANDO DOM

function clicar() {
  const teste = document.querySelector('#txt2')
  const ul = teste.querySelector('ul')

  ul.innerHTML += '<li>Jaguaribe</li>' + '<li>Chuva</li>'
  // neste caso, foram adicionado 2 novos itens na lista

  ul.children[1].innerHTML = '<h2>Comprimido<h2>'
  // neste caso foi alterado o 2º item d lista.
}
