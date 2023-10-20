//programaçao funcional

//map

// let dados = [3, 4, 5, 6];

// let dadosNovo = dados.map(function(element){
//     return element * 3
// })

// console.log(dadosNovo);

/**
 * sem map
 * 
 * let dados = [3, 4, 5, 6]
 * 
 * let dadosNovo = [];
 * for(let i = 0; i < dados.length; i++){
 * dadosNovo[i] = dados[i] * 3
 * }
 */

//filter com array
// let  dados =[6, 11, 300, 120, 55];
// let resultado = dados.filter(function(d){
//     return d > 50
// })
// console.log(resultado);

//filter com objeto de array
// let pessoas = [
//     {
//         nome: "Diego",
//         idade: 38
//     },
//     {
//         nome: "Claudio",
//         idade: 54
//     },
//     {
//         nome: "Daniel",
//         idade: 14
//     }
// ]

// let resultado = pessoas.filter((pessoa) =>{
// return pessoa.idade >= 18
// })
// console.log(resultado);

//reduce

let numeros = [10, 20, 30]

let resultado = numeros.reduce(function(total, numero){
    return (total + numero)
}) / numeros.length

console.log(resultado);