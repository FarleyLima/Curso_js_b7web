/*
function clicar() {
  const praTic = document.querySelector('#lista2')
  const teste = praTic.querySelector('ul')

  let novoBotao = document.createElement('button')
  novoBotao.innerHTML = 'Clique teste'

  teste.before(novoBotao)
}
*/
// FUNÇÃO PARA VERIFICAR SE HÁ O ATIBUTO "TYPE"
function clicar() {
  const input1 = document.querySelector('.input')

  if (input1.hasAttribute('type')) {
    alert('Função existente')
  } else {
    alert('Função Não encontrada')
  }
}
// FUNÇÃO PARA ALTERAR O placeholder
function clicar0() {
  const input2 = document.querySelector('.input2')

  input2.setAttribute('placeholder', 'Alterando placeholder')
}

// FUNÇÃO QUE VAI TORCAR O TYPE password PARA TYPE TEXT, ONSE ELE IRÁ MOSTRA O TEXTO.
function clicar3() {
  const input3 = document.querySelector('.input3')
  input3.setAttribute('type', 'text')
  // o alerta é só para praticar o hasAttribute
  if (input3.hasAttribute('type')) {
    alert('Exibindo código')
  } else {
    alert('ERRO!!!')
  }
}

// ALTERANDO O TEXTO DO BOTÃO PARA  QUANDO CLICAR ELE MOSTRAR A SENHA E ALTERAR O TEXTO DO BOTÃO.

function clicar3() {
  const input3 = document.querySelector('.input4')
  const botao2 = document.querySelector('.botao2')

  if (input3.getAttribute('type') === 'text') {
    input3.setAttribute('type', 'password')
    botao2.innerHTML = 'Mostrar senha'
  } else {
    input3.setAttribute('type', 'text')
    botao2.innerHTML = 'Ocultar senha'
  }
}

// ALTERANDO A COR DO BODY DIRETO DO JS

function clicar4() {
  const botaoCor = document.querySelector('body')

  botaoCor.style.backgroundColor = '#476678'
  botaoCor.style.textTransform = 'uppercase'
  botaoCor.style.fontWeight = 'bold'
  botaoCor.style.color = '#ffff'
}

// TRABALHANDO COM CLASSES

function clicar5() {
  const botaoCor2 = document.querySelector('.txt2')

  botaoCor2.style.backgroundColor = '#000'
  botaoCor2.style.color = '#ffff'
  botaoCor2.style.padding = '10px'

  if (botaoCor2.classList.contains('txt2')) {
    botaoCor2.classList.remove('txt2')
    botaoCor2.classList.add('xx010')
  } else {
    botaoCor2.classList.add('txt2')
    botaoCor2.classList.remove('xx010')
  }
}
