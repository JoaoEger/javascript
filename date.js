//new é uma palavra reservada para instanciar a um objeto
let data = new Date();
let dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];
let extenso = `${dias[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
console.log(extenso);