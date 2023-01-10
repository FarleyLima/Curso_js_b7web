// verificar se um membro

let isMember = false

let shipping = isMember ? 2 : 5

console.log(`Seu frete é R$: ${shipping}`)

// Exemplo #2
// usando o ? ( if - se ) e ( : else - se não/caso constrário)

console.log(
  isMember
    ? `você é um membro e seu frete é R$ ${shipping}`
    : `Você não um membro, seu frete é R$ ${shipping}`
)

// Exemplo #3 usando uma condicional simples

var age = 10

var isAdult = age >= 18 ? 'Yes, you are an adult' : 'No, you are not adult'

console.log(isAdult)
