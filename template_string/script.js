// Criando váriáveis para praticar com template string.
var name = 'Faley';
var surName = 'Lima';
// usando o template string.
var fullName = `${name} ${surName}`;

console.log(fullName);

//Exemplo #2

var name2 = 'Farley';
var surName2 = 'Lima';
var age = 27;

var fullName2 = `Meu nome é ${name2} e meu sobre nome é ${surName2} e tenho ${age} anos de idade!`;

console.log(fullName2);

// Exemplo #3 utilizando o tamplate string no console.log

var name3 = 'Farley';
var surName3 = 'Lima';
var age2 = 27;

console.log(`Meu nome é ${name3} e sobrenome é ${surName3} e tenho ${age2} anos de idade.`);

// Exemplo #4 fazendo uma operação matemática dentro da expressão na template string

var value = 45;
var text = "Quantidade";

var result = `Tenho uma ${text} de R$:${value} e vou receber mais R$:125, ou seja vou ficar com um total de R$:${value + 125}`;

console.log(result);


