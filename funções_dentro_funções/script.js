// Função raiz quandrada
// função dentro de uma função
/*
function addsquare(a, b) {
  function square(x) {
    return x * x
  }

  let sqrA = square(a)
  let sqrB = square(b)
  return sqrA + sqrB
}
*/

function addsquare(a, b) {
  const square = x => x * x

  let sqrA = square(a)
  let sqrB = square(b)
  return sqrA + sqrB
}

console.log(addsquare(2, 4))

// EXEMPLO #2

function somar(n1, n2) {
  const result = y => (y + y) * 4

  var number1 = result(n1)
  var number2 = result(n2)
  return number1 + number2
}

console.log(somar(3, 3))
