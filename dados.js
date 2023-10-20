//criar variavel na forma antiga
var nomeVariavel;

//metodo novo baseado no ES6
let nomeVar;
let varcomValor = 10;

//constantes
const nomeConstante = 100;

//
let dados = "";

dados +="<ul>";
    dados +="<li>"+nomeConstante+"</li>"
    dados +="<li></li>"
    dados +="<li></li>"
dados += "</ul>"

let dadosLiterais = `
<ul>
    <li>${varcomValor}</li>
    <li>${(cond) ? true : false}</li>
    <li></li>
</ul>
`