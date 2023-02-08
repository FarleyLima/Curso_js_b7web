// PRATICANDO UM LOOP SIMPLES \\

// neste código o loop vai roda 10X no gódigo.
// 0 1º n vai dizer que vai iníciar do 1, o 2º n ele vai contar até o 10 e o 3º n ele vai repertir essa evento.
for (let n = 1; n <= 10; n++) {
  console.log(`Testando o loop for.`)
}

// exemplo #2

for (var p = 0; p <= 12; p++) {
  console.log('Testando o loop for 2: ' + p)
}

// LOOP EM ARRAYS \\

// loop básico em um array;

let marcasMotos = ['honda', 'yamaha', 'bmw', 'kavazaki']

marcasMotos.push('suzuki') // adicionando mais uma marca no array
// o " t " ele etá sendo usado como CHAVE!
// ESTA É UMA FORMA DE USAR O LOOP NO ARRAY
for (let t = 0; t < marcasMotos.length; t++) {
  console.log(marcasMotos[t])
}

// UMA FORMA MAIS INTELIGENTE DE USAR O FLOOP FOR NO ARRAY
// neste caso, está sendo adiconado a lista array no " i ", o in i quer dizer que a chave do array é passou a ser o " i ".
for (let i in marcasMotos) {
  console.log(marcasMotos[i]) // vai retonar o mesmo resultado do exemplo anterior.
}

// MAIS UMA FORMA DE USAR LOOP FOR
// neste eu digo que eu quero que exibar a marca das motos. Neste caso esse se refere a marca, no caso ele retorna nome da marca.
for (let marca of marcasMotos) {
  console.log(marca)
}
