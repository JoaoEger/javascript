const prompt = require('prompt-sync');
//funcoes de agendamento
//executa uma vez após atingir o tempo

// setTimeout(function(){
//     console.log("QUASE NO FIM DA AULA");
// }, 4000)

// setTimeout(frase, 2000);

// function frase(){
//     console.log("exemplo com funcao por fora");
// }

//setInterval - executa repetitivamente quando atinge o tempo

// setInterval(function(){
//     console.log("meu maior defeito é ser humilde demais");
// }, 2000)

//FUNÇOES DE STRING

//LENGTH - PEGA O TAMANHO DA STRING
let str = "Qual o tamanho da minha STRING";
// console.log( str.length );

//indexof - procurar a ocorrencia de um pedaço de string, caractere dentro da string
// console.log( str.indexOf("Q"));

//slice - corta uma string
// console.log( str.slice(5));

//tolowercase - transforma a string em letras minusculas
// console.log( str.toLowerCase());

//touppercase - converta para maiusculo
// console.log( str.toUpperCase());

//replace() - troca uma ocorrencia por uma string
// console.log( str.replace("da minha STRING", "do meu texto"));

//-------------------- metodos para tratamento de numeros
// parseint - converte um numero em formato de string par numerico
// let numero = parseInts(prompt("Digite um numero: "));
// let numero2 = prompt("Digite um numero: ");
// numero2 = parseInt(numero2);

// console.log("O resultado da operação é", numero + numero2);

//pasefloat - converte numero sstring pata float 100.50

let n1 = 207.83235;
let n2 = 387.995465587;

// console.log(parseFloat(n1) + parseFloat(n2));

//tofixed - limita o numero de casas decimais
// console.log(n1.toFixed(2));

//toprecision

console.log(n1.toPrecision(3));

//tostring - converte dados em string
let numero = 200 + 400;
console.log(numero);
console.log(numero.toString());

numero2 = numero.toString();
console.log(typeof(numero));
