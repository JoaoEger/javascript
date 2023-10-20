let lista = [
    "Joao Arnoldo",
    "Claudio"
];

// console.log(lista);

//adiciona um novo item no final do array
lista.push("Lucas");

// console.log(lista);

//adiciona um item no inicio do array
lista.unshift("Leonardo");
console.log(lista);

//remove item no final do array
// lista.pop();
// console.log(lista);

// //remove item no inicio do array
// lista.shift()
// console.log(lista);

//inverte a ordem do array
lista.reverse();
console.log(lista);

//concatena arrays

let novaLista = lista.concat(["Elvys", "Daniel"]);
console.log(novaLista);