function clicar() {
  console.log('Obrigado por clicar no botão!!!')
}

let teste = document.querySelector('.botao')
teste.addEventListener('click', clicar)

// UTILIZANDO A ARROW FUNCTION

/*
let teste = document.querySelector('.botao')
teste.addEventListener('click', () => {
  clicar()
})

*/
