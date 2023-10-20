/* fazer uma promise para calcular media de notas de um aluno
passe como parametro 3 notas, se a média for 7 > resolve como aprovado senão reject como reprovado */
let n1 = 7;
let n2 = 5;
let n3 = 10;
let n4 = 10;
let notas = ((n1 + n2 + n3 + n4)/4)
const media = (nota) => {
    return new Promise( (resolve, reject) => {
        if(notas < 7){
            resolve(nota)
            console.log(nota)
        }else{
            reject(new Error("aprovado"))
            console.log(nota)
        }
    })
}

media(notas)
    .then(nota => console.log("reprovado"))
        .catch(erro => console.log(erro.message))